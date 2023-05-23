import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { authService } from "services/firebase";
import EmailSuccessDialog from "./successDialog";
import EmailErrorDialog from "./errorDialog";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Bisontech 2023 © "}
      <Link color="inherit" href="https://tigrehacks.me/">
        Tigre Hacks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

export default function ForgotPasswordForm(props) {
  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false);
  const [successTitle, setSuccessTitle] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const [errorDialogOpen, setErrorDialogOpen] = React.useState(false);
  const [errorTitle, setErrorTitle] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    console.log(email);

    try {
      await authService.sendResetPasswordMail(email);
      setSuccessDialogOpen(true);
      setSuccessTitle("Correo enviado");
      setSuccessMessage(
        "Se ha enviado correctamente el correo, asegurate de revisar la carpeta de Spam"
      );
    } catch (error) {
      console.error(error);
      setErrorDialogOpen(true);
      setErrorTitle("Correo no encontrado");
      setErrorMessage(
        "El correo no fue encontrado en las cuentas registradas, asegurate de haber escrito correctamente el correo"
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <EmailSuccessDialog
          title={successTitle}
          message={successMessage}
          open={successDialogOpen}
          setOpen={(value) => {
            setSuccessDialogOpen(value);
          }}
        ></EmailSuccessDialog>

        <EmailErrorDialog
          title={errorTitle}
          message={errorMessage}
          open={errorDialogOpen}
          setOpen={(value) => {
            setErrorDialogOpen(value);
          }}
        ></EmailErrorDialog>

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#fff" }} src="/tiger.png" />
          <Typography component="h1" variant="h5">
            Olvide mi contraseña
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              "& .MuiLink-root": { color: "orange" },
              "& .MuiButton-root": { backgroundColor: "orange", color: "#fff" },
              "& .MuiButton-root: hover": {
                backgroundColor: "#fff",
                color: "#000",
                border: "solid black 1px",
              },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button type="submit" fullWidth variant="contained">
              Enviar correo
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/dashboard" variant="body2">
                  Iniciar sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
