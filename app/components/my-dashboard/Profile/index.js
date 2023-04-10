import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material'
import PersonalData from '../../register/PersonalData';
import AdditionalInfo from '../../register/AdditionalInfo';
const Profile = (props) => {
    const { gender, setGender, pronoun, setPronoun, universities, setUniversities, handleUniversityChange, selectedUniversity } = props;
    return (
        <>
            <PersonalData />
            <AdditionalInfo />

        </>
    )
}
export default Profile;