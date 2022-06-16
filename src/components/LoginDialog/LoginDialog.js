import React from "react";

function LoginDialog(props){
const inputStyle = {
    width: '400px', 
    height: '40px', 
    borderRadius: '10px', 
    borderColor: 'rebeccapurple', 
    margin: '5px', 
    padding: '5px',
    borderWidth: '1px',
    fontSize: '20px'
}

    return(
        <div>
           <form>
                <input style={inputStyle} type={props.type} name="name" />
            </form>
        </div>
    )
}

export default LoginDialog;