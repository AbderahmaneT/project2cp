import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Notifications from "./pages/Notifications/Notifications";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

export default function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: process.env.React_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: process.env.React_APP_GOOGLE_MAPS_API_KEY,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              isLoggedIn ? (
                <div className="flex flex-row">
                  <Sidebar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/users" element={<Users />} />
                      <Route
                        path="/notifications"
                        element={<Notifications />}
                      />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </main>
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
