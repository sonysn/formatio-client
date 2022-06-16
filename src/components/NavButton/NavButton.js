import React from "react";
import './NavButton.css';

function NavButton (props) {
    return (
        <div className="but">
            {props.name}
        </div>
    )
}

export default NavButton;