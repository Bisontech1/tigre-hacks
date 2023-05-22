"use client";
import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { authService, teamsDatabase, usersDatabase } from "services/firebase";
import ErrorDialog from "components/register/ErrorDialog";
import ConfirmDialog from "components/my-dashboard/MyState/confirmDialog";
const MyProfile = () => {
  const [loading, setLoading] = useState(true);
  const [teamReady, setTeamReady] = useState(false);
  const [userReady, setUserReady] = useState(false);
  const [user, setUser] = useState(null);
  const [team, setTeam] = useState(null);

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      init();
    }, 500);
  }, []);

  const init = async () => {
    try {
      setLoading(true);

      const savedUserData = JSON.parse(localStorage.getItem("userData"));

      const userData = await usersDatabase.findUserByEmail(savedUserData.email);

      localStorage.setItem("userData", JSON.stringify(userData));

      setUser(userData);

      if (userData.assistanceConfirmed) setUserReady(true);

      if (await checkTeam(userData.team)) setTeamReady(true);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrorDialogOpen(true);
      setErrorTitle("Ocurrió un error");
      setErrorMessage("Ocurrió un error al obtener tu información");
    }
  };

  const checkTeam = async (teamName) => {
    const foundTeam = await teamsDatabase.findTeamByName(teamName);

    if (foundTeam == null) return false;

    const teamData = Object.values(foundTeam).pop();

    if (teamData == null) return false;

    setTeam(teamData);

    let confirmedCount = 0;

    for (let member of teamData.members) {
      const memberData = await usersDatabase.findUserByEmail(member);
      if (!memberData.assistanceConfirmed) return false;
      confirmedCount++;
    }

    if (confirmedCount < 4) return false;

    return true;
  };

  const confirmAssistence = async () => {
    try {
      if (user.assistanceConfirmed) return;

      user.assistanceConfirmed = true;

      await usersDatabase.update(user);

      setUserReady(true);
      localStorage.setItem("userData", JSON.stringify(user));

      const teamReady = await checkTeam(user.team);

      if (!teamReady) return;
      if (!team) return;

      team.teamReady = true;

      await teamsDatabase.update(team);
      setTeamReady(true);
    } catch (error) {
      console.error(error);
      setErrorDialogOpen(true);
      setErrorTitle("Ocurrió un error");
      setErrorMessage("Ocurrió un error al obtener tu información");
    }
  };

  const getText = () => {
    if (teamReady) return "Equipo listo";

    if (userReady) return "Asistencia confirmada";

    return "En espera de confirmación";
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
        <ConfirmDialog
          open={confirmDialogOpen}
          setOpen={(value) => {
            setConfirmDialogOpen(value);
          }}
          onConfirm={() => {
            confirmAssistence();
          }}
        ></ConfirmDialog>
        <ErrorDialog
          title={errorTitle}
          message={errorMessage}
          open={errorDialogOpen}
          setOpen={(value) => {
            setErrorDialogOpen(value);
          }}
        ></ErrorDialog>
        <Box
          sx={{
            "& .MuiTypography-root": { margin: "20px 0px", color: "#868686" },
          }}
        >
          {loading ? (
            <div
              style={{
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <>
              {" "}
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                Estado Actual:
              </Typography>
              <Typography variant="h5">{getText()}</Typography>
              <Button
                onClick={() => {
                  setConfirmDialogOpen(true);
                }}
                disabled={userReady}
                variant="contained"
              >
                Confirmar Asistencia
              </Button>
            </>
          )}
        </Box>
      </div>
    </div>
  );
};

export default MyProfile;
