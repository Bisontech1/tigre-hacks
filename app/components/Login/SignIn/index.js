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
import { authService, teamsDatabase } from '../../../services/firebase'
import { useRouter } from "next/navigation";
import { usersDatabase } from "../../../services/firebase";

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

export default function SignIn(props) {
  const router = useRouter();

  const { onSignInClicked } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onSignInClicked({
      email: data.get("email"),
      password: data.get("password"),
    });
    

    authService.signIn(data.get("email"),data.get("password"))
    .then(res => router.push("dashboard/my-dashboard"))
    .catch(res=> console.log(res))

    usersDatabase.getUserData(data.get("email")).then(res=>console.log(res))
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ 
              mt: 1,
              '& .MuiLink-root':{color:'orange'},
              '& .MuiButton-root':{backgroundColor:'orange', color:'#fff'},
              '& .MuiButton-root: hover':{backgroundColor:'#fff', color:'#000', border:'solid black 1px'}
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/dashboard/forgotPassword" variant="body2">
                  Olvide mi contraseña
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Link href="/dashboard/register" variant="body2">
                  {"¿No tienes una cuenta aún? Registrate aquí"}
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
