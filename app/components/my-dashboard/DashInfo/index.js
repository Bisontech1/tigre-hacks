"use client";
import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { teamsDatabase, usersDatabase } from "services/firebase";
const MyDashboard = () => {
  const [team, setTeam] = useState(null);
  const [state, setState] = useState("Cargando...");

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const user = await usersDatabase.getUserData(userData.email);
        setTeam(user.team);
        const teamReady = await checkTeam(user.team);

        if (teamReady) {
          setState("Equipo listo");
          return;
        }

        if (user.assistanceConfirmed) {
          setState("Asistencia Confirmada");
          return;
        }

        setState("En espera de confirmación");
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const checkTeam = async (teamName) => {
    const foundTeam = await teamsDatabase.findTeamByName(teamName);

    if (foundTeam == null) return false;

    const teamData = Object.values(foundTeam).pop();

    if (teamData == null) return false;

    let confirmedCount = 0;

    for (let member of teamData.members) {
      const memberData = await usersDatabase.findUserByEmail(member);
      if (!memberData.assistanceConfirmed) return false;
      confirmedCount++;
    }

    if (confirmedCount < 4) return false;

    return true;
  };

  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "solid 0.5px #DADADA",
    alignItems: "center",
    height: "200px",
    "& .MuiTypography-root": { color: "#868686" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{ margin: "50px 0px", display: "flex", justifyContent: "center" }}
      >
        <Grid item xl={6} sm={12} xs={12} sx={gridItemStyle}>
          <Typography variant="subtitle2">Datos Registrados</Typography>
          <Typography variant="h5">Tus datos han sido registrados</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          margin: "50px 0px",
          display: "flex",
          justifyContent: "center",
          "& .MuiGrid-item": { margin: "0px 10px" },
        }}
      >
        <Grid item xl={4} sm={12} xs={12} sx={gridItemStyle}>
          <Typography variant="subtitle2">Equipo</Typography>
          {team ? (
            <>
              <Typography variant="h5">{team}</Typography>
            </>
          ) : (
            <Typography variant="h5">Aún no tienes equipo</Typography>
          )}
        </Grid>
        <Grid item xl={4} sm={12} xs={12} sx={gridItemStyle}>
          <Typography variant="subtitle2">Estado</Typography>
          <Typography variant="h5">{state}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyDashboard;
