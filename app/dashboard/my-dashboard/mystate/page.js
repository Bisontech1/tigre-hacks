"use client";
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import PersonalData from '../../../components/register/PersonalData';
import AdditionalInfo from '../../../components/register/AdditionalInfo';
const MyProfile = () => {
    const [gender, setGender] = useState('');
    const [pronoun, setPronoun] = useState('');
    const [universities, setUniversities] = useState([]);
    const [grade, setGrade] = useState('');
    const [country, setCountry] = useState('');
    const [schools, setSchools] = useState([]);
    const [otherGender, setOtherGender] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [otherUniversity, setOtherUniversity] = useState('');
    const [activeStep, setActiveStep] = useState(0);

    const handleUniversityChange = event => {
        const value = event.target.value;
        setSelectedUniversity(value);

        if (value === 'other') {
            setOtherUniversity('');
        }
    };
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{ '& .MuiTypography-root': { margin: '20px 0px', color:'#868686' } }}>
                    <Typography variant='h4' sx={{ fontWeight: '600'}}>
                        Actualmente estas:
                    </Typography>
                    <Typography variant='h5' >
                        En espera
                    </Typography>
                    <Typography variant='subtitle1' >
                        No te preocupes, te enviaremos un correo cuando tu estado sea actualizado
                    </Typography>
                </Box>
            </div>

        </div>
    )
}

export default MyProfile;