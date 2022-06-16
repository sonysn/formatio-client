import React from "react";
import './LandingPageBody.css';
import LandingPagebtn from "../LandingPageButtons/LandingPagebtn";

function LandingPageBody(){
    const styleDiv = {
        color: 'white',
        margin: '0',
        fontSize: '40px'
    }

    return(
        <div className="landingpagebodydiv">
            <p style={styleDiv}>Welcome!</p>
            <p className="bodycontent">Lorem Ipsum lil ahshhshdhshshd</p>
            <p className="bodycontent">Welcome to Formatio</p>
            <LandingPagebtn name='Sign In'/>
        </div>
    )
}

export default LandingPageBody;