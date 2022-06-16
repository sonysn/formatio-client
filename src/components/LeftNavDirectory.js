import React from "react";

function LeftNavDirectory(props){
    const divStyle = {
        color: 'white',
        fontSize: '20px',
        padding: '7px',
        textAlign: 'center',
        width: '190px',
        marginTop: '50px',
        boxShadow: "0 13px 40px rgb(0 0 0 / 0.2)"
    }

    return(
        <div style={divStyle}>
            <p>{props.name}</p>
        </div>
    );
}

export default LeftNavDirectory;