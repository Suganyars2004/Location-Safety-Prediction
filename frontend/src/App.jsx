import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Register from "./Components/Register";
import Login from "./Components/Login";
import SafetyMap from "./Components/SafetyMap"
import SafeRoute from "./Components/SafeRoute"
import Alerts from "./Components/Alerts";
import ReportIncident from "./Components/ReportIncident";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/safety-map" element={<SafetyMap />} />
        <Route path="/safe-route" element={<SafeRoute />} />
        <Route path="/alerts" element={<Alerts />} />
       <Route path="/report" element={<ReportIncident />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;