import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useTranslationContext } from "contexts";


const PersonalDataUpdate = (props) => {
  const { language, setLanguage } = useTranslationContext();

  const {
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
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "20px", color: "#c5c5c5", textAlign: "center" }}
        >
          Para una mejor experiencia te recomendamos usar Chrome en tu registro
        </Typography>

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
    </>
  );
};
export default PersonalDataUpdate;
