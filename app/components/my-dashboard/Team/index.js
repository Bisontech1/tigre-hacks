"use client";
import { useEffect, useState } from 'react';
import { Box } from '@mui/material'
import CreateTeam from './CreateTeam'
import FindTeam from './FindTeam'
import { teamsDatabase, usersDatabase } from '../../../services/firebase'
import { useRouter } from 'next/navigation';

const Team = () => {

    const router = useRouter();
    const [team, setTeam] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [teamsList, setTeamsList] = useState({})
    const [teamSearch, setTeamSearch] = useState(false)
    const [teamData, setTeamData] = useState(
        {
            participante1: '',
            participante2: '',
            participante3: '',
            participante4: '',
        }
    )
    const [createTeam, setCreateTeam] = useState(false)

    const handleTeams = async () => {
        await teamsDatabase.read()
            .then(res => {
                const filteredTeams = Object.fromEntries(Object.entries(res).filter(([key, value]) => {
                    return value.team_name.toLowerCase().includes(team.toLowerCase());
                }));
                setTeamsList(filteredTeams);    
                setTeamSearch(true)
            })
            .catch(err => console.log(err))

    }
    

    const handleAddTeam = async () => {
        try {
            //Campos vacíos
            if (!teamData.participante1 || !teamData.participante2 || !teamData.participante3 || !teamData.participante4) {
                setError(true)
                setErrorMessage("Uno de los campos está vacio, asegurate de escribir todos los emails de los participantes de tu equipo. 🐒")
                return
            }

            //Nombre de equipo ya existe
            const teamExists = await teamsDatabase.findTeamByName(team);
            if (teamExists) {
                setError(true);
                setErrorMessage("El nombre de equipo ya está registrado. Te dejamos una lista de nombres de equipos cool aquí https://ahaslides.com/es/blog/funny-team-names/ 🙆‍♂️🙆‍♀️");
                return;
            } else {

                //No se encontraron todos los emails registrados
                const foundedEmails = await usersDatabase.findEmails(teamData);
                if (foundedEmails.notFoundEmails.length > 0) {
                    setError(true);
                    setErrorMessage(`No se pudieron encontrar los siguientes emails: ${foundedEmails.notFoundEmails}, asegúrate de que todos los miembros de tu equipo estén registrados`);
                    return;
                }

                try {
                    console.log(team)
                    console.log(teamData)
                    teamsDatabase.add(team)
                    setError(true);
                    setErrorMessage("¡Equipo registrado con éxito! 🚀👩‍🚀👨‍🚀");
                    await usersDatabase.addTeamToUsers(team, Object.values(teamData))
                    await teamsDatabase.addUsersToTeam(team, Object.values(teamData))
                    //router.push("/dashboard/mydashboard")
                } catch (error) {
                    console.log(error)
                }

                return
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleFindTeam = async (e) => {
        console.log('finding..')
    }

    useEffect(()=>{
        handleTeams();
    },[])



    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100hv',
                marginTop: '100px',
                '& .MuiTextField-root': {
                    maxWidth: '600px'
                }

            }}>
            {createTeam ?
                <CreateTeam
                    team={team}
                    setTeam={setTeam}
                    teamData={teamData}
                    setTeamData={setTeamData}
                    handleAddTeam={handleAddTeam}
                    createTeam={createTeam}
                    setCreateTeam={setCreateTeam}
                    error={error}
                    setError={setError}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}

                />
                :
                <FindTeam
                    team={team}
                    setTeam={setTeam}
                    createTeam={createTeam}
                    setCreateTeam={setCreateTeam}
                    handleFindTeam={handleFindTeam}
                    teamSearch={teamSearch}
                    setTeamSearch={setTeamSearch}
                    handleTeams={handleTeams}
                    teamsList={teamsList}
                    setTeamsList={setTeamsList}
                />
            }

        </Box>
    )
}

export default Team;