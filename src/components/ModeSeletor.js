import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from '@mui/material';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
const bull = (
    <Box
        component='span'
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>
        •
    </Box>
);

function ModeSeletor() {
    return (
        <Stack direction='row' spacing={2}>
            <Card sx={{minWidth: 275}}>
                <CardActionArea>
                    <CardContent>
                        <DirectionsWalkIcon sx={{width: '40vmin'}} />
                        <Typography gutterBottom variant='h5' component='div'>
                            Walk
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{minWidth: 275}}>
                <CardActionArea>
                    <CardContent>
                        <DirectionsWalkIcon sx={{width: '40vmin'}} />
                        <Typography gutterBottom variant='h5' component='div'>
                            Cycle
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{minWidth: 275}}>
                <CardActionArea>
                    <CardContent>
                        <DirectionsWalkIcon sx={{width: '40vmin'}} />
                        <Typography gutterBottom variant='h5' component='div'>
                            Drive
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Stack>
    );
}

export default ModeSeletor;
