"use client";
import React, { useState, useEffect } from "react";
import { Box, Stepper, Step, StepLabel, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./index.css";
import PersonalData from "../../components/register/PersonalData";
import AdditionalInfo from "../../components/register/AdditionalInfo";
import HackerSecurity from "../../components/register/HackerSecurity";
import WelcomeModal from "../../components/register/WelcomeDialog";
import { User } from "models/user";
import { authService, cvStorage, usersDatabase } from "services/firebase";
import ErrorDialog from "components/register/ErrorDialog";
import SuccessDialog from "components/register/SuccessDialog";
import { useTranslationContext } from "contexts";

const user = new User();

const PersonalDataForm = () => {
  const { language, setLanguage } = useTranslationContext();

  const [pronoun, setPronoun] = useState("");
  const [universities, setUniversities] = useState([]);
  const [university, setUniversity] = useState("");
  const [universitySpecification, setUniversitySpecification] = useState("");
  const [gender, setGender] = useState("");
  const [genderSpecification, setGenderSpecification] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const [diet, setDiet] = useState("");
  const [dietSpecifications, setDietSpecifications] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [identifyAsGroup, setIdentifyAsGroup] = useState("");
  const [race, setRace] = useState("");
  const [raceSpecification, setRaceSpecification] = useState("");
  const [maxStudies, setMaxStudies] = useState("");
  const [mainStudyArea, setMainStudyArea] = useState("");
  const [mainStudyAreaSpecification, setMainStudyAreaSpecification] =
    useState("");

  const [agreesToConductCode, setAgreesToConductCode] = useState(false);

  const [agreesToShareInfo, setAgreesToShareInfo] = useState(false);
  const [agreesToSendMail, setAgreesToSendMail] = useState(false);
  const [agreesToShareSponsor, setAgreesToShareSponsor ] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [successTitle, setSuccessTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [file, setFile] = useState(null);

  const isNextButtonDisabled = {
    0: () => {
      if (
        !user.name ||
        !user.lastname ||
        !user.phoneNumber ||
        !user.university ||
        !user.pronouns ||
        !user.gender ||
        !user.age ||
        !user.password ||
        !confirmPassword ||
        !file
      )
        return true;

      if (password != confirmPassword) return true;

      return false;
    },
    1: () => {
      if (
        !user.dietRestricions ||
        !user.shirtSize
      )
        return true;

      if (user.dietRestricions == "Other" && !user.dietSpecifications)
        return true;

      return false;
    },
    2: () => {
      if (!user.agreesToConductCode || !user.agreesToShareInfo) return true;

      return false;
    },
  };

  useEffect(() => {
    initForm();
  });

  const initForm = async () => {
    const response = await fetch("/schools/schools.json");
    const json = await response.json();
    setUniversities(json.universidades);
    user.age = age;
    user.phoneNumber = phoneNumber;
    user.pronouns = pronoun;
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.gender = gender;
    user.genderSpecification = genderSpecification;
    user.university = university;
    user.universitySpecification = universitySpecification;
    user.password = password;

    user.dietRestricions = diet;
    user.dietSpecifications = dietSpecifications;
    user.shirtSize = shirtSize;
    user.identifyAsGroup = identifyAsGroup;
    user.race = race;
    user.raceSpecification = raceSpecification;
    user.maxStudies = maxStudies;
    user.mainStudyArea = mainStudyArea;
    user.mainStudyAreaSpecification = mainStudyAreaSpecification;

    user.agreesToConductCode = agreesToConductCode;
    user.agreesToSendMail = agreesToSendMail;
    user.agreesToShareInfo = agreesToShareInfo;
    user.agreesToShareSponsor = agreesToShareSponsor;
    user.team = ""
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#FFA500",
        darker: "#053e85",
      },
      secondary: {
        main: "#306de0",
      },
      neutral: {
        main: "",
        contrastText: "#fff",
      },
    },
  });



  const stepperStyle = {
    margin: "50px 0px",
    "& .MuiStepLabel-root .Mui-completed": {
      color: "orange", // circle color (COMPLETED)
    },
    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
      color: "black", // Just text label (COMPLETED)
    },
    "& .MuiStepLabel-root .Mui-active": {
      color: "orange", // circle color (ACTIVE)
    },
    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
      color: "white", // Just text label (ACTIVE)
    },
    "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
      fill: "white", // circle's number (ACTIVE)
    },
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleRegistration = async () => {
    let registeredUser;

    try {
      registeredUser = await authService.register(user.email, user.password);
      user.id = registeredUser.uid;
    } catch (error) {
      setErrorMessage(
        "Ya existe un usuario con el correo electrónico proporcionado"
      );
      setErrorDialogOpen(true);
      return;
    }

    let uploadedFile;

    try {
      uploadedFile = await cvStorage.addFile(file);
      user.cvUrl = await cvStorage.getDownloadURL(uploadedFile);
    } catch (error) {
      await authService.deleteUser(registeredUser);
      setErrorMessage("Ocurrió un error al subir el CV");
      setErrorTitle("¡Error!");
      setErrorDialogOpen(true);
      return;
    }

    try {
      await usersDatabase.add(user);
    } catch (error) {
      await authService.deleteUser(registeredUser);
      await cvStorage.deleteFile(uploadedFile);
      setErrorMessage("Ocurrió un error al registrar el usuario");
      setErrorTitle("¡Error!");
      setErrorDialogOpen(true);
      return;
    }

    setSuccessTitle("Usuario Registrado");
    setSuccessMessage("¡Gracias por registrarte a Tigre Hacks!");
    setSuccessDialogOpen(true);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalData
            file={file}
            onFileChange={(value) => {
              setFile(value);
              console.log(value);
            }}
            pronoun={pronoun}
            setPronoun={(value) => {
              user.pronouns = value;
              setPronoun(value);
            }}
            name={name}
            setName={(value) => {
              user.name = value;
              setName(value);
            }}
            lastname={lastname}
            setLastname={(value) => {
              user.lastname = value;
              setLastname(value);
            }}
            universities={universities}
            gender={gender}
            setGender={(value) => {
              user.gender = value;
              setGender(value);
            }}
            genderSpecification={genderSpecification}
            setGenderSpecification={(value) => {
              user.genderSpecification = value;
              setGenderSpecification(value);
            }}
            email={email}
            setEmail={(value) => {
              user.email = value;
              setEmail(value);
            }}
            phoneNumber={phoneNumber}
            setPhoneNumber={(value) => {
              user.phoneNumber = value;
              setPhoneNumber(value);
            }}
            age={age}
            setAge={(value) => {
              user.age = value;
              setAge(value);
            }}
            university={university}
            setUniversity={(value) => {
              user.university = value;
              setUniversity(value);
            }}
            universitySpecification={universitySpecification}
            setUniversitySpecification={(value) => {
              user.universitySpecification = value;
              setUniversitySpecification(value);
            }}
            password={password}
            setPassword={(value) => {
              user.password = value;
              setPassword(value);
            }}
            confirmPassword={confirmPassword}
            setConfirmPassword={(value) => {
              setConfirmPassword(value);
            }}
          />
        );
      case 1:
        return (
          <AdditionalInfo
            diet={diet}
            setDiet={(value) => {
              user.dietRestricions = value;
              setDiet(value);
            }}
            dietSpecifications={dietSpecifications}
            setDietSpecification={(value) => {
              user.dietSpecifications = value;
              setDietSpecifications(value);
            }}
            shirtSize={shirtSize}
            setShirtSize={(value) => {
              user.shirtSize = value;
              setShirtSize(value);
            }}
            identifyAsGroup={identifyAsGroup}
            setIdentifyAsGroup={(value) => {
              user.identifyAsGroup = value;
              setIdentifyAsGroup(value);
            }}
            race={race}
            setRace={(value) => {
              user.race = value;
              setRace(value);
            }}
            raceSpecification={raceSpecification}
            setRaceSpecification={(value) => {
              user.raceSpecification = value;
              setRaceSpecification(value);
            }}
            maxStudies={maxStudies}
            setMaxStudies={(value) => {
              user.maxStudies = value;
              setMaxStudies(value);
            }}
            mainStudyArea={mainStudyArea}
            setMainStudyArea={(value) => {
              user.mainStudyArea = value;
              setMainStudyArea(value);
            }}
            mainStudyAreaSpecification={mainStudyAreaSpecification}
            setMainStudyAreaSpecification={(value) => {
              user.mainStudyAreaSpecification = value;
              setMainStudyAreaSpecification(value);
            }}
          />
        );
      case 2:
        return (
          <HackerSecurity
            agreesToConductCode={agreesToConductCode}
            setAgreesToConductCode={(value) => {
              user.agreesToConductCode = value;
              setAgreesToConductCode(value);
            }}
            agreesToShareInfo={agreesToShareInfo}
            setAgreesToShareInfo={(value) => {
              user.agreesToShareInfo = value;
              setAgreesToShareInfo(value);
            }}
            agreesToSendMail={agreesToSendMail}
            setAgreesToSendMail={(value) => {
              user.agreesToSendMail = agreesToSendMail;
              setAgreesToSendMail(value);
            }}
            agreesToShareSponsor = {agreesToShareSponsor}
            setAgreesToShareSponsor ={(value) => {
              user.agreesToShareSponsor = agreesToShareSponsor;
              setAgreesToShareSponsor(value);
            }}
          />
        );
      default:
        return <h3>XD</h3>;
    }
  };

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <WelcomeModal />
        <SuccessDialog
          title={successTitle}
          message={successMessage}
          open={successDialogOpen}
          setOpen={(value) => {
            setSuccessDialogOpen(value);
          }}
        />
        <ErrorDialog
          title={errorTitle}
          message={errorMessage}
          open={errorDialogOpen}
          setOpen={(value) => {
            setErrorDialogOpen(value);
          }}
        />
        <Box
          component="form"
          sx={{
            width: "800px",
            "& .MuiTextField-root": {
              m: 1,
              width: "90%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
              borderRadius: "10px",
            },
            "& .MuiFormControl-root": {
              m: 1,
              width: "90%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
              borderRadius: "10px",
            },
          }}
          className="form"
          noValidate
          autoComplete="off"
        >
          <Stepper activeStep={activeStep} sx={stepperStyle}>
            <Step>
              <StepLabel>
                {language?.getString("register.personalData.title")}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
                {language?.getString("register.additionalInformation.title")}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>
                {language?.getString("register.hackerSecurity.title")}
              </StepLabel>
            </Step>
          </Stepper>
          {getStepContent(activeStep)}
          <Grid
            container
            justifyContent="space-between"
            sx={{ marginTop: "100px" }}
          >
            <Grid item>
              {activeStep <= 0 ? (
                <Button color="secondary" href="/">
                  {language?.getString("register.cancel")}
                </Button>
              ) : (
                <Button color="secondary" onClick={handleBack}>
                  {language?.getString("register.previous")}
                </Button>
              )}
            </Grid>
            <Grid item>
              {activeStep >= 2 ? (
                <Button
                  disabled={isNextButtonDisabled[activeStep]?.()}
                  color="secondary"
                  onClick={handleRegistration}
                >
                  {language?.getString("register.complete")}
                </Button>
              ) : (
                <Button
                  disabled={isNextButtonDisabled[activeStep]?.()}
                  color="secondary"
                  onClick={handleNext}
                >
                  {language?.getString("register.next")}
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default PersonalDataForm;
