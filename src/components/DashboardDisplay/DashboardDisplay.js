import React from "react";
import TutorDetails from "../TutorDetails/TutorDetails";
import './DashboardDisplay.css';

function DashboardDisplay(){
    const divStyle = {
        backgroundColor: 'white', 
        float: 'right', 
        width: '80%', 
        height: '550px',
        borderRadius: "50px 20px 50px 10px",
        margin: '15px'
    }
    return(
        <div className="dashdiv">
            <TutorDetails name='Tutor 1' />
            <TutorDetails name='Tutor 2' />
        </div>
    );
}

export default DashboardDisplay;