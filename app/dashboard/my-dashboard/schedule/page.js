"use client";
import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Schedule from '../../../components/my-dashboard/Schedule';

const MyProfile = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box sx={{ '& .MuiTypography-root': { margin: '20px 0px', color:'#868686' } }}>
                    {/* <Schedule /> */}

                    <Typography variant="h5">Proximamente</Typography>
                </Box>
            </div>

        </div>
    )
}

export default MyProfile;