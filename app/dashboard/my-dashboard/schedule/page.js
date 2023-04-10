"use client";
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Schedule from '../../../components/my-dashboard/Schedule';
import PersonalData from '../../../components/register/PersonalData';
import AdditionalInfo from '../../../components/register/AdditionalInfo';
const MyProfile = () => {
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
                    <Schedule />
                </Box>
            </div>

        </div>
    )
}

export default MyProfile;