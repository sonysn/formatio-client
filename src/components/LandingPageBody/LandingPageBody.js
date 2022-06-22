import React, { useState, useEffect } from "react";
import "./LandingPageBody.css";
import LandingPagebtn from "../LandingPageButtons/LandingPagebtn";

function LandingPageBody() {
  const styleDiv = {
    color: "white",
    margin: "0",
    fontSize: "40px",
  };
  // // testing out my api
  // const [data, setData] = useState({});

  // useEffect(() => {
  //     fetch("/api")
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [])

  return (
    <div className="landingpagebodydiv">
      <p style={styleDiv}>Welcome!</p>
      <p className="bodycontent">4tk</p>
      <p className="bodycontent">Welcome to Formatio</p>
      <LandingPagebtn name="Sign In" />
    </div>
  );
}

export default LandingPageBody;
