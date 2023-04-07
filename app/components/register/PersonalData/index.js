import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material'
import PDFDropzone from '../PdfDropzone';

const PersonalData = (props) => {
    const { gender, setGender, pronoun, setPronoun, universities, setUniversities, handleUniversityChange, selectedUniversity } = props;
    return (
        <>
            <Grid container
                justifyContent='center'
                alignItems='center'
                sx={{ '& .MuiGrid-item': { display: 'flex', justifyContent: 'center' } }}>
                <Grid item xl={6} sm={12}>
                    <TextField label="Nombre" />

                </Grid>
                <Grid item xl={6} sm={12}>
                    <TextField label="Apellidos" />

                </Grid>
            </Grid>

            <Grid container justifyContent='center' alignItems='center'
                sx={{ '& .MuiGrid-item': { display: 'flex', justifyContent: 'center' } }}>
                <Grid item xl={6} sm={12}>
                    <TextField label="Email" />

                </Grid>
                <Grid item xl={6} sm={12}>
                    <TextField label="Teléfono" />

                </Grid>
            </Grid>

            <Grid container justifyContent='center' alignItems='center'
                sx={{ '& .MuiGrid-item': { display: 'flex', justifyContent: 'center' } }}>
                <Grid item xl={6} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel>Pronombres</InputLabel>
                        <Select
                            value={pronoun}
                            label="Pronombres"
                            onChange={(e) => setPronoun(e.target.value)}
                        >
                            <MenuItem value={10}>She/Her</MenuItem>
                            <MenuItem value={20}>He/Him</MenuItem>
                            <MenuItem value={30}>They/Them</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>
                            <MenuItem value="She/They">She/They</MenuItem>
                            <MenuItem value="He/They">He/They</MenuItem>
                            <MenuItem value="Prefer Not to Answer">Prefer Not to Answer</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>

                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xl={6} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel>Genero</InputLabel>
                        <Select
                            value={gender}
                            label="Genero"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value="Man">Man</MenuItem>
                            <MenuItem value="Woman">Woman</MenuItem>
                            <MenuItem value="Non-Binary">Non-Binary</MenuItem>
                            <MenuItem value="Prefer to self-describe">Prefer to self-describe</MenuItem>
                            <MenuItem value="Prefer Not to Answer">Prefer Not to Answer</MenuItem>

                        </Select>
                    </FormControl>

                </Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center'
                sx={{ '& .MuiGrid-item': { display: 'flex', justifyContent: 'center' } }}>
                <Grid item xl={6} sm={12}>
                    <TextField label="Edad" />
                </Grid>
                <Grid item xl={6} sm={12}>
                    <FormControl fullWidth>
                        <InputLabel>Escuela</InputLabel>
                        <Select value={selectedUniversity} onChange={handleUniversityChange}>
                            {universities.map(university => (
                                <MenuItem key={university.nombre} value={university.nombre}>
                                    {university.nombre}
                                </MenuItem>
                            ))}
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                        {selectedUniversity === 'other' && (
                            <TextField
                                value={otherUniversity}
                                onChange={handleOtherUniversityChange}
                                label="Otra Escuela"
                                variant="outlined"
                            />
                        )}
                    </FormControl>
                </Grid>
                <Grid container justifyContent='center' alignItems='center' sx={{ margin: '50px 0px' }}>
                    <Grid item sx={{ width: '100%' }}>
                        <PDFDropzone />
                    </Grid>
                    <Grid item sx={{ marginTop:'10px',width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#868686', '& a': { color: 'orange' } }}>
                        <Typography>
                            ¿No tienes un CV/Résumé? Aprende a crear el tuyo con &nbsp;
                            <a href="https://akotadi.notion.site/Materials-cad70d8407dd40d38c7d64c0bb4b518c">Proyecto Nutria</a>
                        </Typography>
                        <Typography>
                            ó Escucha el Podcast de &nbsp;
                            <a href="https://www.youtube.com/watch?v=HNxvj3t3k2M&t=0s">Hireline.io & Don Chambitas</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default PersonalData;