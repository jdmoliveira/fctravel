import React from "react";
import { withRouter } from "react-router-dom";
import './Map.css'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

class Map extends React.Component {

    constructor() {
        super();
        if (localStorage.getItem('latitude') == null) {
            //default values
            localStorage.setItem('latitude', 0);
            localStorage.setItem('longitude', 0);
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            localStorage.setItem('latitude', position.coords.latitude);
            localStorage.setItem('longitude', position.coords.longitude);
            if(localStorage.getItem('latitude') == null)
                window.location.reload();
        });
        if (localStorage.getItem('latitude') == 0) {
            navigator.geolocation.getCurrentPosition((position) => {
                localStorage.setItem('latitude', position.coords.latitude);
                localStorage.setItem('longitude', position.coords.longitude);
                window.location.reload();
            });
        }
    }

    render() {
        const position = [localStorage.getItem('latitude'), localStorage.getItem('longitude')];
        return (
            <div className = "MapDisplay">
                <MapContainer id='container' center={position} zoom={17} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=70e9fe8acc0a4e7694a75fe6210ce615"
                    />
                    <Marker position={position}>
                        <Popup>
                            You are here.
                        </Popup>
                    </Marker>
                </MapContainer>,
            </div>
        )
    }
}

export default withRouter(Map);

//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
//https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=70e9fe8acc0a4e7694a75fe6210ce615