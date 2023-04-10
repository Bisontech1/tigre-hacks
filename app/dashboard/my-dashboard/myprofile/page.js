"use client";
import { useState } from 'react'
import { Box, Button } from '@mui/material'
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
                <Box
                    component="form"
                    sx={{
                        bgColor: '#F7F7F7',
                        margin:'30px 0px',
                        '& .MuiTextField-root': { m: 1, width: '90%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)', borderRadius: '10px' },
                        '& .MuiFormControl-root': { m: 1, width: '90%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)', borderRadius: '10px' }
                    }}
                    className="form"
                    noValidate
                    autoComplete="off"
                >
                    <PersonalData
                        gender={gender}
                        setGender={setGender}
                        pronoun={pronoun}
                        setPronoun={setPronoun}
                        universities={universities}
                        setUniversities={setUniversities}
                        handleUniversityChange={handleUniversityChange}
                        selectedUniversity={selectedUniversity}
                    />
                    <AdditionalInfo
                        gender={gender}
                        setGender={setGender}
                        pronoun={pronoun}
                        setPronoun={setPronoun}
                        universities={universities}
                        setUniversities={setUniversities}
                        handleUniversityChange={handleUniversityChange}
                        selectedUniversity={selectedUniversity}
                    />

                    <Button>
                        Guardar Mis Datos
                    </Button>
                </Box>
            </div>

        </div>
    )
}

export default MyProfile;