
import React from 'react';
import { Maps } from '../../components/Map/Map';
import { useJsApiLoader } from "@react-google-maps/api";

function Dashboard() {

  const { isLoaded, loadError } = useJsApiLoader({
    id: process.env.React_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: process.env.React_APP_GOOGLE_MAPS_API_KEY,
  });

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
      {loadError ? (
        <p>Error loading Google Maps API: {loadError.message}</p>
      ) : (
        <div className="rounded-2xl h-96 w-full">
          <Maps isLoaded={isLoaded} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
