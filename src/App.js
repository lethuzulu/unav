import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import {memo, useCallback, useState} from 'react';
import MapContainer from './components/MapContainer';
import NavBar from './components/Navbar';
import ModeSeletor from './components/ModeSeletor';


function App() {

    


    return (
        <>
        <NavBar /><MapContainer />
        
        </>
    )
}

export default memo(App);
