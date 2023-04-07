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

import './index.css'
import PersonalData from '../../components/register/PersonalData';
import AdditionalInfo from '../../components/register/AdditionalInfo';
import HackerSecurity from '../../components/register/HackerSecurity';

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

                <Stepper activeStep={activeStep}>
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
                <Grid container justifyContent="space-between">
                    <Grid item>
                        {activeStep <= 0 ? null :

                            <Button onClick={handleBack}>
                                Atras
                            </Button>
                        }
                    </Grid>
                    <Grid item>
                        {activeStep >= 2 ? null :

                            <Button onClick={handleNext}>
                                Siguiente
                            </Button>
                        }

                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default PersonalDataForm;
