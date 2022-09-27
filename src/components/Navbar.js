import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '10vh',
            }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                        UNAV MAPS
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar
