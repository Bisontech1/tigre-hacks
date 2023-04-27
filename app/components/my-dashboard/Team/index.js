"use client";
import { useState } from 'react';
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

    const [teamData, setTeamData] = useState(
        {
            participante1: '',
            participante2: '',
            participante3: '',
            participante4: '',
        }
    )
    const [createTeam, setCreateTeam] = useState(false)
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
                if (foundedEmails.notFoundEmails) {
                    setError(true);
                    setErrorMessage(`No se pudieron encontrar los siguientes emails: ${foundedEmails.notFoundEmails}, asegúrate de que todos los miembros de tu equipo estén registrados`);
                    return;
                }

                try {
                    teamsDatabase.add(team)
                    setError(true);
                    setErrorMessage("¡Equipo registrado con éxito! 🚀👩‍🚀👨‍🚀");
                    await usersDatabase.addTeamToUsers(team,Object.values(teamData))
                    router.push("/dashboard/mydashboard")
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
                />
            }

        </Box>
    )
}

export default Team;