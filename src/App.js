import "./App.css";
import React from "react";
import Formatio from "./components/FormatioHead/Formatio";
import LandingPageBody from "./components/LandingPageBody/LandingPageBody";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Formatio />
      <NavBar />
      <LandingPageBody />
    </div>
  );
}

export default App;
