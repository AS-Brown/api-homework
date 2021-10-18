import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapBox = ({gibbers}) => {
    
    const markFavourite = function(gibber){
        if (Object.keys(gibber).length > 10){
            if (gibber.status === true){
                return <p>This is a favourite</p>
        }
    }}

    const gibberMarkers = gibbers.map((gibber, index) => {

        return (
            <Marker key={index} position={[gibber.latitude, gibber.longitude]}>
                <Popup>
                    <h3>{gibber.name}</h3>
                    {markFavourite(gibber)}
                </Popup>
            </Marker>
        )
    })

    return(
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    {gibberMarkers}
    </MapContainer>
)}

export default MapBox;