import "./LandingPagebtn.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPagebtn(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button className="btnland" onClick={() => navigate("signin")}>
        {props.name}
      </button>
    </div>
  );
}

export default LandingPagebtn;
