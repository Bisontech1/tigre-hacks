"use client";
import { Box, Typography, TextField, Button } from '@mui/material'
import { teamsDatabase } from '../../../services/firebase'
const FindTeam = (props) => {

    const { team, setTeam, createTeam, setCreateTeam, handleFindTeam } = props
    
    const handleTeams = async () =>{
        try{
            teamsDatabase.read()
        }catch(error){
            console.log(error)
        }
    }
    const handleChange = () =>{
        setCreateTeam(true)
    }
    return (
        <Box sx={{display:'flex', flexDirection:'column', 
        '& .MuiTextField-root':{margin:'20px 0px 20px 0px'},
        '& .MuiButton-root':{color:'#fff', backgroundColor:'orange'},
        '& .MuiButton-root:hover':{color:'orange', backgroundColor:'#fff'}}}>
            <Typography variant='h3' sx={{ fontWeight: 500 }}>
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
                sx={{marginBottom:'20px'}}
            >
                Buscar equipo
            </Button>
            <Button
                variant="text"
                onClick={handleChange}
            >
                Crea un nuevo equipo
            </Button>
        </Box>
    )
}

export default FindTeam;