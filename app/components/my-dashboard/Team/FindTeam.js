"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
} from "@mui/material";
import { teamsDatabase } from "../../../services/firebase";
import { Status } from "./index";
const FindTeam = (props) => {
  const {
    status,
    team,
    setTeam,
    teamsList,
    setTeamsList,
    createTeam,
    setCreateTeam,
    handleFindTeam,
    handleTeams,
    teamSearch,
    setTeamSearch,
  } = props;

  const handleChange = () => {
    setCreateTeam(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { margin: "20px 0px 20px 0px" },
        "& .MuiButton-root": { color: "#fff", backgroundColor: "orange" },
        "& .MuiButton-root:hover": { color: "orange", backgroundColor: "#fff" },
      }}
    >
      <Grid container flexDirection="column">
        <Typography variant="h3" sx={{ fontWeight: 500 }}>
          Encuentra tu equipo
        </Typography>
        <TextField
          id="outlined-basic"
          label="Escribe el nombre del equipo a buscar"
          variant="outlined"
          onChange={(e) => setTeam(e.target.value)}
        />
        <Button
          variant="text"
          onClick={handleTeams}
          sx={{ marginBottom: "20px" }}
        >
          Buscar equipo
        </Button>
        <Button variant="text" onClick={handleChange}>
          Crea un nuevo equipo
        </Button>

        {teamSearch ? (
          <>
            {teamsList
              ? Object.entries(teamsList).map((team, index) => {
                  return (
                    <Grid item key={index}>
                      <Card sx={{ m: 2 }}>
                        <CardContent>
                          <Typography variant="h5">
                            {team[1].team_name}
                          </Typography>
                          {team[1].members ? (
                            team[1].members.map((member) => {
                              return (
                                <>
                                  <Typography variant="subtitle1">
                                    {member}
                                  </Typography>
                                </>
                              );
                            })
                          ) : (
                            <Typography variant="subtitle1">
                              No Hay miembros aún
                            </Typography>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              : null}
          </>
        ) : null}
      </Grid>
    </Box>
  );
};

const TeamContent = (props) => {};

export default FindTeam;
