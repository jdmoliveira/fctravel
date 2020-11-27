import React from "react";
import { withRouter } from "react-router-dom";
import './Find.css'
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

class Find extends React.Component {

    constructor(props) {
        super(props);
        this.map = null;
    }

    drawRoute() {
        console.log(this.map)
        L.Routing.control({
            waypoints: [
                L.latLng(57.74, 11.94),
                L.latLng(57.6792, 11.949)
            ]
        }).addTo(this.map);
    }

    render() {
        const position = [38.716, -9.133];
        return (
            <div className="MapDisplay">
                <MapContainer center={position} zoom={12} scrollWheelZoom={false} ref={ (ref) => this.map=ref }>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=70e9fe8acc0a4e7694a75fe6210ce615"
                    />
                </MapContainer>,
            </div>
        )
    }
}

export default withRouter(Find);
