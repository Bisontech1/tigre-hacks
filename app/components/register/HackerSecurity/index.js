import { Grid, Checkbox, Typography } from '@mui/material'

const HackerSecurity = (props) => {
    const {
        gender,
        setGender,
        pronoun,
        setPronoun,
        universities,
        setUniversities,
        handleUniversityChange,
        selectedUniversity } = props;
    const gridSX = { display: 'flex', alignItems: 'flex-start', margin: '20px 0px' }

    return (
        <Grid container direction="column" 
        alignItems="flex-start" 
        sx={{ marginBottom: '100px', '& .MuiTypography-root':{ marginTop:'10px', color:'#6D6D6D'}, '& a':{ color:'orange'},}}>

            <Grid item xs={12} sx={gridSX}>
                <Checkbox />
                <Typography>He leído y estoy de acuerdo con el <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">código de conducta de la MLH</a></Typography>
            </Grid>
            <Grid item xs={12} sx={gridSX}>
                <Checkbox />
                <Typography>
                    Autorizo el compartir la información de mi solicitud/inscripción con
                    la <a href="https://mlh.io">Major League Hacking</a> para la administración del evento,
                    la clasificación y la administración de MLH de acuerdo con
                    la <a href="https://mlh.io/privacy">Política de Privacidad de la MLH</a>. Además, acepto los términos de los
                    <a href="https://mlh.io/terms">Términos y Condiciones del Concurso</a> de MLH y la <a href="https://mlh.io/privacy">Política de Privacidad de MLH. </a><b>*</b>
                </Typography>
            </Grid>
            <Grid item xs={12} sx={gridSX}>
                <Checkbox />
                <Typography>
                    Autorizo a la MLH a enviarme un correo electrónico
                    en el que pueda suscribirme a los newsletters de
                    los Hackers, Eventos ó Organizadores de la MLH y
                    otras comunicaciones de la MLH.
                </Typography>
            </Grid>

        </Grid>
    );
};
export default HackerSecurity;