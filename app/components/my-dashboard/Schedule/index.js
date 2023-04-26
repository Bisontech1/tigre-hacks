import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Box, CardContent } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Schedule() {

    const day1 = [
        "3:00 P.M Registration Opens",
        "5:00 P.M Opening Ceremony & Kick-off!",
        "6:00 P.M Hacking Begins",
        "8:00 P.M Dinner",
    ]
    const day2 = [
        "12:00 A.M Midnight Snack",
        "12:10 A.M Mini Event: Karaoke/Karaoke Slideshow",
        "8:30 A.M Breakfast",
        "10:00 A.M Chubb Workshop",
        "11:00 A.M BeGo Workshop",
        "12:00 P.M omegaUp Programming Competence",
        "2:00 P.M Meal",
        "3:30 P.M MLH CupStack Mini Event",
        "5:00 P.M Your First Resume Workshop by Don Chambitas",
        "6:00 P.M GitHub Scavenger Hunt",
        "8:00 P.M Dinner",
    ]
    const day3 = [
        "12:00 A.M Midnight Snack",
        "12:10 A.M Mini Event: Karaoke/Karaoke Slideshow",
        "8:30 A.M Breakfast",
        "11:00 A.M Hacking Ends!",
        "11:30 A.M Judging First Round",
        "2:00 P.M Top 7 Hackathon Projects",
        "2:30 P.M Top 7: Pitching time",
        "3:30 P.M Winners announcements",
        "4:00 P.M Closing ceremony",
        "4:30 P.M The End!",
    ]
    return (
        <Box sx={{
            '& .MuiCard-root': { margin: '20px 0px' },
            '& .MuiCardHeader-root	': { backgroundColor: '#f9f9f9' },
            '& .MuiCardHeader-title': { fontWeight: '600', color: '#767676' },
            '& .MuiCardHeader-subheader': { color: '#767676' }
        }}>
            <Card sx={{ width: '800px' }}>
                <CardHeader
                    title="Day 1"
                    subheader="May 26, 2023"
                />
                <CardContent>
                    {day1.map((index,element) => {
                        return (
                            <Typography key={index} variant="subtitle1" sx={{borderBottom:'solid #f5f5f5 0.5px '}}>
                                {element}
                            </Typography>
                        )
                    })}
                </CardContent>
            </Card>
            <Card sx={{ width: '800px' }}>
                <CardHeader
                    title="Day 2"
                    subheader="May 27, 2023"
                />
                <CardContent>

                    {
                        day2.map((index, element) => {
                            return (
                                <Typography key={index} variant="subtitle1" sx={{borderBottom:'solid #f5f5f5 0.5px '}}>
                                    {element}
                                </Typography>

                            )
                        })
                    }
                </CardContent>
            </Card>

            <Card sx={{ width: '800px' }}>
                <CardHeader
                    title="Day 3"
                    subheader="May 28, 2023"
                />
                <CardContent>

                    {
                        day3.map((index,element) => {
                            return (
                                <Typography key={index} variant="subtitle1" sx={{borderBottom:'solid #f5f5f5 0.5px '}}>
                                    {element}
                                </Typography>
                            )
                        })
                    }
                </CardContent >
            </Card >
        </Box>
    );
}