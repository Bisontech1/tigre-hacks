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

const user = new User();

const PersonalDataForm = () => {
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

  const isNextButtonDisabled = {
    0: () => {
      if (
        !user.name ||
        !user.lastname ||
        !user.phoneNumber ||
        !user.university ||
        !user.pronouns ||
        !user.gender ||
        !user.age
      )
        return true;

      return false;
    },
    1: () => {
      if (
        !user.dietRestricions ||
        !user.shirtSize ||
        !user.identifyAsGroup ||
        !user.race ||
        !user.maxStudies ||
        !user.mainStudyArea
      )
        return true;

      if (user.dietRestricions == "Other" && !user.dietSpecifications)
        return true;

      if (
        user.mainStudyArea == "Other (please specify)" &&
        !user.mainStudyAreaSpecification
      )
        return true;

      if (user.race == "Other (Please Specify)" && !user.raceSpecification)
        return true;

      return false;
    },
  };

  useEffect(() => {
    initForm();
  }, []);

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

    user.dietRestricions = diet;
    user.dietSpecifications = dietSpecifications;
    user.shirtSize = shirtSize;
    user.identifyAsGroup = identifyAsGroup;
    user.race = race;
    user.raceSpecification = raceSpecification;
    user.maxStudies = maxStudies;
    user.mainStudyArea = mainStudyArea;
    user.mainStudyAreaSpecification = mainStudyAreaSpecification;
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

  const handleRegistration = () => {
    //TODO
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalData
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
        return <HackerSecurity />;
      default:
        return <h3>XD</h3>;
    }
  };

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <WelcomeModal />
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
              <StepLabel>Personal Data</StepLabel>
            </Step>
            <Step>
              <StepLabel>Additional Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Hacker Security and Protection</StepLabel>
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
                  Cancelar
                </Button>
              ) : (
                <Button color="secondary" onClick={handleBack}>
                  Atras
                </Button>
              )}
            </Grid>
            <Grid item>
              {activeStep >= 2 ? (
                <Button color="secondary" onClick={handleRegistration}>
                  Finalizar Registro
                </Button>
              ) : (
                <Button
                  disabled={isNextButtonDisabled[activeStep]?.()}
                  color="secondary"
                  onClick={handleNext}
                >
                  Siguiente
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
