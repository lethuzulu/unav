import { Box } from "@mui/material"
import { GoogleMap } from "@react-google-maps/api"
import { memo } from "react"
import Map from "./Map"

function MapContainer(){

    return (

        <Box
            sx={{
                width: '100vw',
                height: '90vh',
            }}><Map />
        </Box>

    )

}

export default memo(MapContainer)