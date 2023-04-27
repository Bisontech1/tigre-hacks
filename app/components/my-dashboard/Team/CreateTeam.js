"use client";
import { Box, Typography, TextField, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import { teamsDatabase } from '../../../services/firebase'

const CreateTeam = (props) => {

    const { team, setTeam, teamData, setTeamData, handleAddTeam, createTeam, setCreateTeam, error, setError, errorMessage, setErrorMessage,  } = props
    const handleChange = () => {
        setCreateTeam(false)
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            '& .MuiTextField-root': { margin: '20px 0px 20px 0px' },
            '& .MuiButton-root': { color: '#fff', backgroundColor: 'orange' },
            '& .MuiButton-root:hover': { color: 'orange', backgroundColor: '#fff' }
        }}>
            <Dialog
                open={error}
                onClose={() => { setError(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {errorMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setError(false) }} autoFocus>
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 500,
                    color: '#525252'
                }}>
                ¿Listo para crear tu equipo?
            </Typography>
            <Typography
                variant="subtitle2"
                sx={{
                    color: '#979797'
                }}>
                Asegurate de que todos tus compañeros estén registrados en Tigre Hacks antes de crear tu equipo.
            </Typography>
            <TextField
                id="team"
                label="Nombre de tú equipo"
                variant="outlined"
                onChange={(e) => setTeam(e.target.value)}
            />
            <TextField
                id="member1"
                label="Email Participante 1"
                variant="outlined"
                onChange={(e) => setTeamData({ ...teamData, participante1: e.target.value })}
            />
            <TextField
                id="member2"
                label="Email Participante 2"
                variant="outlined"
                onChange={(e) => setTeamData({ ...teamData, participante2: e.target.value })}
            />
            <TextField
                id="member3"
                label="Email Participante 3"
                variant="outlined"
                onChange={(e) => setTeamData({ ...teamData, participante3: e.target.value })}
            />
            <TextField
                id="member4"
                label="Email Participante 4"
                variant="outlined"
                onChange={(e) => setTeamData({ ...teamData, participante4: e.target.value })}
            />

            <Button
                variant="text"
                onClick={handleAddTeam}
                sx={{ marginBottom: '20px' }}
                color="primary"
            >
                Registrar nuevo equipo
            </Button>

            <Button
                variant="text"
                onClick={handleChange}
                color="primary"
            >
                Buscar un equipo
            </Button>
        </Box>
    )
}

export default CreateTeam;