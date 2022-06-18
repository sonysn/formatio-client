import React from "react";

function DashboardTopNav(){
const divStyle = {
    backgroundColor: 'rebeccapurple',
    display: 'inline-block',
    float: 'right',
    width: '80%',
    marginTop: '-102px',
    margin: '15px',
    borderRadius: "50px 20px 50px 10px",
    boxShadow: "0 13px 40px rgb(0 0 0 / 0.2)",
    // testing this
    position: 'relative'
}

    return(
        <div style={divStyle}>
            <div style={{float: 'right', padding: '20px', color: 'white', fontSize: '20px'}}>Sign Out</div>
            {/* Notification icon & button */}
            <p style={{float: 'right', padding: '0px', color: 'white', fontSize: '20px'}}>Not</p>
            <p style={{padding: '0px', marginLeft: '109px', color: 'white', fontSize: '25px', fontWeight: 'bolder'}}>Welcome School!</p>
        </div>
    );
}

export default DashboardTopNav;