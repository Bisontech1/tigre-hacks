import { Box, Grid, Typography } from '@mui/material'
const MyDashboard = () => {
    const gridItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: 'solid 0.5px #DADADA',
        alignItems: 'center',
        height: '200px',
        '& .MuiTypography-root': { color: '#868686' },
    }
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid container sx={{ margin: '50px 0px', display: 'flex', justifyContent: 'center' }}>
                <Grid item xl={6} sm={12} xs={12} sx={gridItemStyle} >
                    <Typography variant="subtitle2">Datos Registrados</Typography>
                    <Typography variant="h5">Tus datos han sido registrados</Typography>
                </Grid>

            </Grid>
            <Grid container sx={{ margin: '50px 0px', display: 'flex', justifyContent: 'center', '& .MuiGrid-item': { margin: '0px 10px' } }}>
                <Grid item xl={4} sm={12} xs={12} sx={gridItemStyle}>
                    <Typography variant="subtitle2">Equipo</Typography>
                    <Typography variant="h4"><b>4</b></Typography>
                    <Typography variant="body2">Participantes</Typography>
                    <Typography variant="h5">Carne con verduras</Typography>
                </Grid>
                <Grid item xl={4} sm={12} xs={12} sx={gridItemStyle}>
                    <Typography variant="subtitle2">Estado</Typography>
                    <Typography variant="h5">En Espera</Typography>
                </Grid>

            </Grid>
        </Box>
    )
}

export default MyDashboard;