import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoib25lbGVpZiIsImEiOiJjazdlMGZsYzQwNGJzM2xtcm0zcTBnY210In0.5SMgDOJSXTO19xRoPJAznQ'; // Set your mapbox token here
 
export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
      });
    
      return (
        <MapGL
          {...viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
        </MapGL>
      );
}

Map.defaultProps = {
    viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    }
}