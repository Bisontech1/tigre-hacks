"use client";
import { useCallback, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AdditionalInfo from "../../../components/register/AdditionalInfo";
import PersonalDataUpdate from "components/my-dashboard/Profile/personalDataUpdate";
import { User } from "models/user";
import AdditionalInfoUpdate from "components/my-dashboard/Profile/addiotionalInfoUpdate";
import PDFDropzone from "components/register/PdfDropzone";
import PasswordUpdate from "components/my-dashboard/Profile/passwordUpdate";
import PDFDropzoneUpdate from "components/my-dashboard/Profile/pdfUpdate";
import { authService, cvStorage, usersDatabase } from "services/firebase";
import SuccessDialog from "components/register/SuccessDialog";
import ErrorDialog from "components/register/ErrorDialog";

let user = new User();

const MyProfile = () => {
  const [pronoun, setPronoun] = useState("");
  const [universities, setUniversities] = useState([]);
  const [university, setUniversity] = useState("");
  const [universitySpecification, setUniversitySpecification] = useState("");
  const [gender, setGender] = useState("");
  const [genderSpecification, setGenderSpecification] = useState("");
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

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [file, setFile] = useState(null);

  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [successTitle, setSuccessTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const initForm = useCallback(async () => {
    const response = await fetch("/schools/schools.json");
    const json = await response.json();
    setUniversities(json.universidades);

    if (user.hasOwnProperty('age')) {
      setAge(user.age);
    } else {
      setAge('');
    }
    
    if (user.hasOwnProperty('phoneNumber')) {
      setPhoneNumber(user.phoneNumber);
    } else {
      setPhoneNumber('');
    }
    
    if (user.hasOwnProperty('pronouns')) {
      setPronoun(user.pronouns);
    } else {
      setPronoun('');
    }
    
    if (user.hasOwnProperty('name')) {
      setName(user.name);
    } else {
      setName('');
    }
    
    if (user.hasOwnProperty('lastname')) {
      setLastname(user.lastname);
    } else {
      setLastname('');
    }
    
    if (user.hasOwnProperty('email')) {
      setEmail(user.email);
    } else {
      setEmail('');
    }
    
    if (user.hasOwnProperty('gender')) {
      setGender(user.gender);
    } else {
      setGender('');
    }
    
    if (user.hasOwnProperty('genderSpecification')) {
      setGenderSpecification(user.genderSpecification);
    } else {
      setGenderSpecification('');
    }
    
    if (user.hasOwnProperty('university')) {
      setUniversity(user.university);
    } else {
      setUniversity('');
    }
    
    if (user.hasOwnProperty('universitySpecification')) {
      setUniversitySpecification(user.universitySpecification);
    } else {
      setUniversitySpecification('');
    }
    
    if (user.hasOwnProperty('dietRestricions')) {
      setDiet(user.dietRestricions);
    } else {
      setDiet('');
    }
    
    if (user.hasOwnProperty('dietSpecifications')) {
      setDietSpecifications(user.dietSpecifications);
    } else {
      setDietSpecifications('');
    }
    
    if (user.hasOwnProperty('shirtSize')) {
      setShirtSize(user.shirtSize);
    } else {
      setShirtSize('');
    }
    
    if (user.hasOwnProperty('identifyAsGroup')) {
      setIdentifyAsGroup(user.identifyAsGroup);
    } else {
      setIdentifyAsGroup('');
    }
    
    if (user.hasOwnProperty('race')) {
      setRace(user.race);
    } else {
      setRace('');
    }
    
    if (user.hasOwnProperty('raceSpecification')) {
      setRaceSpecification(user.raceSpecification);
    } else {
      setRaceSpecification('');
    }
    
    if (user.hasOwnProperty('maxStudies')) {
      setMaxStudies(user.maxStudies);
    } else {
      setMaxStudies('');
    }
    
    if (user.hasOwnProperty('mainStudyArea')) {
      setMainStudyArea(user.mainStudyArea);
    } else {
      setMainStudyArea('');
    }
    
    if (user.hasOwnProperty('mainStudyAreaSpecification')) {
      setMainStudyAreaSpecification(user.mainStudyAreaSpecification);
    } else {
      setMainStudyAreaSpecification('');
    }
  }, []);

  useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem("userData"));
    user = parsedUser;

    initForm();
  }, [initForm]);

  const isUpdateDataButtonDisabled = () => {
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
    if (
      !user.dietRestricions ||
      !user.shirtSize ||
      !user.race ||
      !user.identifyAsGroup ||
      !user.mainStudyArea ||
      !user.maxStudies
    )
      return true;

    if (user.dietRestricions == "Other" && !user.dietSpecifications)
      return true;

    if (user.race == "Other (Please Specify)" && !user.raceSpecification)
      return true;

    if (
      user.mainStudyArea == "Other (please specify)" &&
      !user.mainStudyAreaSpecification
    )
      return true;

    return false;
  };

  const isUpdatePasswordDisabled = () => {
    if (!password && !confirmPassword) return true;

    if (password != confirmPassword) return true;
    return false;
  };

  const isUpdateCVDisabled = () => {
    if (!file) return true;

    return false;
  };

  const updatePersonalData = async () => {
    try {
      await authService.updateEmail(user.email);
      const updatedUser = await usersDatabase.update(user);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
    } catch (error) {
      console.log(error);
      setErrorMessage(
        "Ya existe un usuario con el correo electrónico proporcionado"
      );
      setErrorDialogOpen(true);
      return;
    }

    setSuccessTitle("Usuario Actualizado");
    setSuccessMessage("Se ha actualizado correctamente tu información");
    setSuccessDialogOpen(true);
  };

  const updatePassword = async () => {
    try {
        await authService.updatePassword(password);
      } catch (error) {
        console.log(error);
        setErrorMessage(
          "Ocurrió un error al actualizar la contraseña, inicia sesión nuevamente e intentalo de nuevo"
        );
        setErrorDialogOpen(true);
        return;
      }
  
      setSuccessTitle("Contraseña Actualizada");
      setSuccessMessage("Se ha actualizado correctamente tu información");
      setSuccessDialogOpen(true);
  };

  const updateCV = async () => {
    let uploadedFile;

    try {
      await cvStorage.deleteFileWithUrl(user.cvUrl);
      uploadedFile = await cvStorage.addFile(file, user.id + ".pdf");
      user.cvUrl = await cvStorage.getDownloadURL(uploadedFile);
      const updatedUser = await usersDatabase.update(user);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
    } catch (error) {
      console.error(error);
      setErrorMessage("Ocurrió un error al subir el CV");
      setErrorTitle("¡Error!");
      setErrorDialogOpen(true);
      return;
    }

    setSuccessTitle("CV Actualizado");
    setSuccessMessage("Se ha actualizado correctamente tu información");
    setSuccessDialogOpen(true);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SuccessDialog
          title={successTitle}
          message={successMessage}
          open={successDialogOpen}
          route="#"
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
            bgColor: "#F7F7F7",
            margin: "30px 0px",
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
          <PersonalDataUpdate
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

          <AdditionalInfoUpdate
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

          <Button
            disabled={isUpdateDataButtonDisabled()}
            onClick={() => {
              updatePersonalData();
            }}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Actualizar Datos
          </Button>

          <PasswordUpdate
            password={password}
            setPassword={(value) => {
              setPassword(value);
            }}
            confirmPassword={confirmPassword}
            setConfirmPassword={(value) => {
              setConfirmPassword(value);
            }}
          ></PasswordUpdate>

          <Button
            onClick={() => {
              updatePassword();
            }}
            disabled={isUpdatePasswordDisabled()}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Actualizar Contraseña
          </Button>

          <PDFDropzoneUpdate
            selectedFile={file}
            onFileChange={(value) => {
              setFile(value);
            }}
          ></PDFDropzoneUpdate>

          <Button
            disabled={isUpdateCVDisabled()}
            onClick={() => {
              updateCV();
            }}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Actualizar CV
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default MyProfile;
