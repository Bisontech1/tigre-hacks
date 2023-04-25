"use client";
import React, { useState, useEffect } from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Grid,
    Button
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {agregarParticipante} from '../../utils/firebase' 

import './index.css'
import PersonalData from '../../components/register/PersonalData';
import AdditionalInfo from '../../components/register/AdditionalInfo';
import HackerSecurity from '../../components/register/HackerSecurity';
import WelcomeModal from '../../components/register/WelcomeDialog';

const PersonalDataForm = () => {
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


    useEffect(() => {
        // Fetch schools from JSON file
        fetch('/schools/schools.json')
            .then(response => response.json())
            .then((data) => {
                setUniversities(data.universidades)
            });
    }, []);

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#FFA500',
                darker: '#053e85',
            },
            secondary: {
                main: '#306de0'
            },
            neutral: {
                main: '',
                contrastText: '#fff',
            },
        },
    });

    const stepperStyle = {
        margin: '50px 0px',
        '& .MuiStepLabel-root .Mui-completed': {
            color: 'orange', // circle color (COMPLETED)
        },
        '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
        {
            color: 'black', // Just text label (COMPLETED)
        },
        '& .MuiStepLabel-root .Mui-active': {
            color: 'orange', // circle color (ACTIVE)
        },
        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
        {
            color: 'white', // Just text label (ACTIVE)
        },
        '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            fill: 'white', // circle's number (ACTIVE)
        },
    }

    const handleUniversityChange = event => {
        const value = event.target.value;
        setSelectedUniversity(value);

        if (value === 'other') {
            setOtherUniversity('');
        }
    };

    const handleOtherUniversityChange = event => {
        setOtherUniversity(event.target.value);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleRegistration = () =>{
        const participantData={
            nombre: 'David',
            apellidos: 'Lazaro Fernandez',
            email: 'davidlazaro20@hotmail.com',
            telefono: '9213043932',
            pronombres: 'He/Him',
            genero: 'Hombre',
            edad: '22',
            escuela: 'Universidad Autonoma de Nuevo León',
            resumeUrl: '',
            restriccionesDietarias: 'Ninguna',
            tallaCamisa: 'XL',
            generoSubrepresentado: 'Latino',
            raza: 'Hispanic',
            gradoDeEstudios: 'Licenciatura No Graduado',
            lgbt: 'Si',
            mlhemail: true
        }
        
        agregarParticipante(participantData)
        .then(() => console.log("Participante agregado a la base de datos"))
        .catch(error => console.error("Error al agregar participante", error));


    }


    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <PersonalData
                    pronoun={pronoun}
                    setPronoun={pronoun}
                    universities={universities}
                    setUniversities={setUniversities}
                    gender={gender}
                    setGender={setGender}
                    selectedUniversity={selectedUniversity}
                    handleUniversityChange={handleUniversityChange}
                />;
            case 1:
                return <AdditionalInfo
                    pronoun={pronoun}
                    setPronoun={pronoun}
                    universities={universities}
                    setUniversities={setUniversities}
                    gender={gender}
                    setGender={setGender}
                    selectedUniversity={selectedUniversity}
                    handleUniversityChange={handleUniversityChange}
                />
            case 2:
                return <HackerSecurity
                    pronoun={pronoun}
                    setPronoun={pronoun}
                    universities={universities}
                    setUniversities={setUniversities}
                    gender={gender}
                    setGender={setGender}
                    selectedUniversity={selectedUniversity}
                    handleUniversityChange={handleUniversityChange}
                />
            default:
                return <h3>XD</h3>
        }
    }

    return (
        <div className='container'>
            <ThemeProvider theme={theme}>
                <WelcomeModal />
                <Box
                    component="form"
                    sx={{
                        width: '800px',
                        '& .MuiTextField-root': { m: 1, width: '90%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)', borderRadius: '10px' },
                        '& .MuiFormControl-root': { m: 1, width: '90%', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)', borderRadius: '10px' }
                    }}
                    className="form"
                    noValidate
                    autoComplete="off"
                >

                    <Stepper activeStep={activeStep} sx={stepperStyle}>
                        <Step>
                            <StepLabel>Personal Data</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Additional Information</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Hacker Security and Protection</StepLabel>
                        </Step>
                    </Stepper>
                    {getStepContent(activeStep)}
                    <Grid container justifyContent="space-between" sx={{ marginTop: '100px' }}>
                        <Grid item>
                            {activeStep <= 0 ? null :
                                <Button color="secondary" onClick={handleBack}>
                                    Atras
                                </Button>
                            }
                        </Grid>
                        <Grid item>
                            {activeStep >= 2 ? null :

                                <Button color="secondary" onClick={handleNext}>
                                    Siguiente
                                </Button>
                            }

                            {activeStep >= 2 ?
                                <Button color="secondary" onClick={handleRegistration}>
                                    Finalizar Registro
                                </Button>
                                :
                                null
                            }

                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>

        </div>
    );
};

export default PersonalDataForm;
