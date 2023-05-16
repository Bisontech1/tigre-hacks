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

const PasswordUpdate = (props) => {
  const { language, setLanguage } = useTranslationContext();

  const { password, setPassword, confirmPassword, setConfirmPassword } = props;
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
    </>
  );
};
export default PasswordUpdate;
