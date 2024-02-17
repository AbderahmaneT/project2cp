import React from 'react';
import {Maps} from '../../components/Map/Map';
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "../../components/Map/Mapconfig";

function Dashboard() {
    const { isLoaded } = useJsApiLoader({
        id: mapOptions.googleMapApiKey,
        googleMapsApiKey: mapOptions.googleMapApiKey,
      })
      const borderStyle = {
        width: '100%',
        height: '3px',
        backgroundColor: '#000',
        margin: '1rem 0',
      };
  return (
    <div className="rounded-lg flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl">Dashboard</h1>
        <hr style={borderStyle} />
        <div className="rounded-2xl">
            <Maps isLoaded={isLoaded}/>
        </div>
    </div>
  )
}

export default Dashboard;