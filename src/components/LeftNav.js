import React from "react";
import LeftNavDirectory from "./LeftNavDirectory";

function LeftNav(){
    const divStyle = {
        backgroundColor: 'rebeccapurple',
        height: '434px',
        marginLeft: '15px',
        display: 'inline-block',
        borderRadius: "10px 30px 50px 10px",
        boxShadow: "0 23px 10px rgb(0 0 0 / 0.2)"
}

    return(
        <div style={divStyle}>
            <LeftNavDirectory name='Tutors' />
            <LeftNavDirectory name='Tutees' />
            <LeftNavDirectory name='Statistics' />
        </div>
    );
}

export default LeftNav;