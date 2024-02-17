import { Maps } from "./components/Map/Map";
import { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./components/Map/Mapconfig";
import { Select } from "./components/Map/Select";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Notifications from "./pages/Notifications/Notifications";
import Settings from "./pages/Settings/Settings";

export default function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  })
  return (
    <div className="">
      <Router>
        <div className="flex flex-row ">
          <Sidebar />
          <main className="flex-grow"> {/*this */}
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}
