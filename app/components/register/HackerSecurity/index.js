import { Grid, Checkbox, Typography } from "@mui/material";
import { useTranslationContext } from "contexts";

const HackerSecurity = (props) => {
  const { language, setLanguage } = useTranslationContext();

  const {
    agreesToConductCode,
    setAgreesToConductCode,
    agreesToShareInfo,
    setAgreesToShareInfo,
    agreesToSendMail,
    setAgreesToSendMail,
  } = props;
  const gridSX = {
    display: "flex",
    alignItems: "flex-start",
    margin: "20px 0px",
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      sx={{
        marginBottom: "100px",
        "& .MuiTypography-root": { marginTop: "10px", color: "#6D6D6D" },
        "& a": { color: "orange" },
      }}
    >
      <Grid item xs={12} sx={gridSX}>
        <Checkbox
          checked={agreesToConductCode}
          onChange={(e) => {
            setAgreesToConductCode(e.target.checked);
          }}
        />
        <Typography>
          He leído y estoy de acuerdo con el{" "}
          <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
            código de conducta de la MLH
          </a>
        </Typography>
      </Grid>
      <Grid item xs={12} sx={gridSX}>
        <Checkbox
          checked={agreesToShareInfo}
          onChange={(e) => {
            setAgreesToShareInfo(e.target.checked);
          }}
        />
        <Typography>
          {language?.getString("register.hackerSecurity.shareInfo1")}{" "}
          <a href="https://mlh.io">
            {language?.getString("register.hackerSecurity.shareInfo2")}
          </a>{" "}
          {language?.getString("register.hackerSecurity.shareInfo3")}{" "}
          <a href="https://mlh.io/privacy">
            {language?.getString("register.hackerSecurity.shareInfo4")}
          </a>{" "}
          {language?.getString("register.hackerSecurity.shareInfo5")}{" "}
          <a href="https://mlh.io/terms">
            {language?.getString("register.hackerSecurity.shareInfo6")}
          </a>{" "}
          {language?.getString("register.hackerSecurity.shareInfo7")}{" "}
          <a href="https://mlh.io/privacy">
            {language?.getString("register.hackerSecurity.shareInfo8")}
          </a>
          <b>*</b>
        </Typography>
      </Grid>
      <Grid item xs={12} sx={gridSX}>
        <Checkbox
          checked={agreesToSendMail}
          onChange={(e) => {
            setAgreesToSendMail(e.target.checked);
          }}
        />
        <Typography>
          {language?.getString("register.hackerSecurity.sendEmail")}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default HackerSecurity;
