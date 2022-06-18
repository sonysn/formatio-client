import React from "react";
import EditButton from "../EditButton";
import './TutorDetails.css';

function TutorDetails(props){
    return(
        <div className="TDdiv">
            <p>{props.name}</p>
            <p style={{marginLeft: '390px', marginTop: '-40px'}}>props.subject</p>
            <EditButton />
        </div>
    );
}

export default TutorDetails;