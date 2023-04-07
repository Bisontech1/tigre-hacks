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
    const gridSX = {display:'flex', alignItems:'center'}

    return (
        <Grid container direction="column" alignItems="flex-start">

            <Grid item xs={12} sx={gridSX}>
                <Checkbox />
                <Typography>He leído y estoy de acuerdo con el <a>código de conducta de la MLH</a></Typography>
            </Grid>
            <Grid item xs={12} sx={gridSX}>
                <Checkbox />
                <Typography>
                    Autorizo el compartir la información de mi solicitud/inscripción con
                    la <a>Major League Hacking</a> para la administración del evento,
                    la clasificación y la administración de MLH de acuerdo con
                    la <a>Política de Privacidad de la MLH</a>. Además, acepto los términos de los
                    <a>Términos y Condiciones del Concurso</a> de MLH y la <a>Política de Privacidad de MLH. </a><b>*</b>
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