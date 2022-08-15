import "./maps.css"

import React, { useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"

import leftArrow from "../assets/left-arrow.png"
import mapImage2 from "../assets/Map Image 2.png"

import * as tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const API_KEY = "GW4pu0GIxAKW4aUktkhMmIfLblBEESWI";

function Maps() {
    let { dest } = useParams();
    console.log(useParams());

    const onChange = (event) => {

    }

    if (dest) {
        dest = dest.slice(1);
    }

    const MAX_ZOOM = 22;
    const mapElement = useRef();
    const [mapLongitude, setMapLongitude] = useState(-121.91599);
    const [mapLatitude, setMapLatitude] = useState(37.36765);
    const [mapZoom, setMapZoom] = useState(13);
    const [map, setMap] = useState({});

    const increaseZoom = () => {
        if (mapZoom < MAX_ZOOM) {
            setMapZoom(mapZoom + 1);
        }
    };

    const decreaseZoom = () => {
        if (mapZoom > 1) {
            setMapZoom(mapZoom - 1);
        }
    };

    const updateMap = () => {
        map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
        map.setZoom(mapZoom);
    };

    useEffect(() => {
        let map = tt.map({
            key: API_KEY,
            container: mapElement.current,
            center: [mapLongitude, mapLatitude],
            zoom: mapZoom
        });
        setMap(map);
        return () => map.remove();
    }, []);

    return (
        <div className="App">
            <div className="background">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
            </div>

            <div id="container_map">
                <div>
                    <Link to="/" id="button_return">
                        <img src={leftArrow} alt="return" />
                    </Link>
                </div>
                <div ref={mapElement} id="map" className="map">
                    <img src={mapImage2} alt="map placeholder" />
                </div>
            </div>

            <br />

            <div>
                <div className="search" id="start">
                    <input type="text" placeholder="Lokasi Awal" />
                </div>
                <div className="search" id="finish">
                    <input type="text"
                        placeholder="Destinasi"
                        onChange={onChange}
                        defaultValue={dest ? dest : ""}
                    />
                </div>
            </div>

            <br />
            <div>
                <div className="bus_details" id="est_time">
                    <div className="details_text">
                        <p><strong>Estimasi Kedatangan</strong></p>
                        <p>x min (Y km)</p>
                    </div>
                </div>
                <div className="bus_details" id="route_code">
                    <div className="details_text">
                        <p><strong>Kode Angkutan</strong></p>
                        <p>Caringin-Sadang Serang - 2341</p>
                    </div>
                </div>
            </div>
            <script>

            </script>
        </div>
    )
}

export default Maps;