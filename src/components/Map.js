import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import {memo, useCallback, useEffect, useState} from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
};

function Map() {
    const [currentPosition, setCurrentPosition] = useState({
        lat: -28.85408325974889,
        lng: 31.848408064138205,
    });

    const [map, setMap] = useState(null);

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(currentPosition);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

        useEffect(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                setCurrentPosition((prev)=>{
                    return {[prev.lat]:position.coords.latitude, [prev.lng]:position.coords.longitude}
                });
                console.log('Current ', currentPosition);
            });
        }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}>
            <Marker position={currentPosition} />
        </GoogleMap>
    ) : (
        <></>
    );
}

export default memo(Map);
