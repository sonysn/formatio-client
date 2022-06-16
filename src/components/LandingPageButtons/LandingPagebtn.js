import './LandingPagebtn.css';
import React from 'react';

function LandingPagebtn(props){
    return(
        <div>
            <button>{props.name}</button>
        </div>
    )
}

export default LandingPagebtn;