import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import PDFDropzone from "../PdfDropzone";
import { useTranslationContext } from "contexts";

const PersonalData = (props) => {
  const { language, setLanguage } = useTranslationContext();

  const {
    file,
    onFileChange,
    genderSpecification,
    setGenderSpecification,
    gender,
    setGender,
    pronoun,
    setPronoun,
    universities,
    universitySpecification,
    setUniversitySpecification,
    university,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    setUniversity,
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    age,
    setAge,
  } = props;
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          "& .MuiGrid-item": { display: "flex", justifyContent: "center" },
        }}
      >
        <Grid item md={6} xs={12}>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            label={language?.getString("register.personalData.name")}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            label={language?.getString("register.personalData.lastname")}
          />
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          "& .MuiGrid-item": { display: "flex", justifyContent: "center" },
        }}
      >
        <Grid item md={6} xs={12}>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label={language?.getString("register.personalData.email")}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel>
              {language?.getString("register.personalData.gender")}
            </InputLabel>
            <Select
              value={gender}
              label={language?.getString("register.personalData.gender")}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="Man">
                {language?.getString("register.personalData.genders.man")}
              </MenuItem>
              <MenuItem value="Woman">
                {language?.getString("register.personalData.genders.woman")}
              </MenuItem>
              <MenuItem value="Non-Binary">
                {language?.getString("register.personalData.genders.nonBinary")}
              </MenuItem>
              <MenuItem value="Prefer to self-describe">
                {language?.getString(
                  "register.personalData.genders.selfDescribe"
                )}
              </MenuItem>
              <MenuItem value="Prefer Not to Answer">
                {language?.getString("register.personalData.genders.notAnswer")}
              </MenuItem>
            </Select>
            {gender === "Prefer to self-describe" && (
              <TextField
                fullWidth
                value={genderSpecification}
                className="other-input"
                onChange={(e) => {
                  setGenderSpecification(e.target.value);
                }}
                label={language?.getString(
                  "register.personalData.genders.specify"
                )}
                variant="outlined"
              />
            )}
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          "& .MuiGrid-item": { display: "flex", justifyContent: "center" },
        }}
      >
        <Grid item md={6} xs={12}>
          <TextField
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={language?.getString("register.personalData.password")}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            value={confirmPassword}
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            error={confirmPassword != "" && password != confirmPassword}
            helperText={
              confirmPassword && password != confirmPassword
                ? language?.getString("register.personalData.passwordNotMatch")
                : ""
            }
            label={language?.getString("register.personalData.confirmPassword")}
          />
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          "& .MuiGrid-item": { display: "flex", justifyContent: "center" },
        }}
      >
        <Grid item md={6} xs={12}>
          <TextField
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            label={language?.getString("register.personalData.phoneNumber")}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel>
              {language?.getString("register.personalData.pronouns")}
            </InputLabel>
            <Select
              value={pronoun}
              label={language?.getString("register.personalData.pronouns")}
              onChange={(e) => setPronoun(e.target.value)}
            >
              <MenuItem value="She/Her">
                {language?.getString(
                  "register.personalData.pronounsSelect.sheHer"
                )}
              </MenuItem>
              <MenuItem value="He/Him">
                {language?.getString(
                  "register.personalData.pronounsSelect.heHim"
                )}
              </MenuItem>
              <MenuItem value="They/Them">
                {language?.getString(
                  "register.personalData.pronounsSelect.theyThem"
                )}
              </MenuItem>
              <MenuItem value="She/They">
                {language?.getString(
                  "register.personalData.pronounsSelect.sheThey"
                )}
              </MenuItem>
              <MenuItem value="He/They">
                {language?.getString(
                  "register.personalData.pronounsSelect.heThey"
                )}
              </MenuItem>
              <MenuItem value="Prefer Not to Answer">
                {language?.getString(
                  "register.personalData.pronounsSelect.notAnswer"
                )}
              </MenuItem>
              <MenuItem value="Other">
                {language?.getString(
                  "register.personalData.pronounsSelect.other"
                )}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          "& .MuiGrid-item": { display: "flex", justifyContent: "center" },
        }}
      >
        <Grid item md={6} xs={12}>
          <TextField
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            label={language?.getString("register.personalData.age")}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel>
              {language?.getString("register.personalData.school")}
            </InputLabel>
            <Select
              value={university}
              label={language?.getString("register.personalData.school")}
              onChange={(e) => {
                const value = e.target.value;
                setUniversity(value);
              }}
            >
              {universities.map((university) => (
                <MenuItem key={university.nombre} value={university.nombre}>
                  {university.nombre}
                </MenuItem>
              ))}
              <MenuItem value="other">
                {language?.getString(
                  "register.personalData.schoolSelect.other"
                )}
              </MenuItem>
            </Select>
            {university === "other" && (
              <TextField
                value={universitySpecification}
                fullWidth
                className="other-input"
                onChange={(e) => {
                  setUniversitySpecification(e.target.value);
                }}
                label={language?.getString("register.personalData.otherSchool")}
                variant="outlined"
              />
            )}
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ margin: "50px 0px" }}
      >
        <Grid item sx={{ width: "100%" }}>
          <PDFDropzone selectedFile={file} onFileChange={onFileChange} />
        </Grid>
        <Grid
          item
          sx={{
            marginTop: "10px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#868686",
            "& a": { color: "orange" },
          }}
        >
          <Typography>
            {language?.getString("register.personalData.dontHaveCV")} &nbsp;
            <a href="https://akotadi.notion.site/Materials-cad70d8407dd40d38c7d64c0bb4b518c">
              {language?.getString("register.personalData.proyectoNutria")}
            </a>
          </Typography>
          <Typography>
            {language?.getString("register.personalData.podcast")} &nbsp;
            <a href="https://www.youtube.com/watch?v=HNxvj3t3k2M&t=0s">
              {language?.getString("register.personalData.podcastTitle")}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default PersonalData;
