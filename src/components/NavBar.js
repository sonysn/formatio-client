import React from "react";
import NavButton from "./NavButton/NavButton";

function NavBar() {
  //This is inline CSS
  const styleObj = {
    padding: "0px",
    margin: "0",
    listStyleType: "none",
  };

  //Inline CSS for Lists
  const styleli = {
    display: "inline",
    paddingRight: "70px",
    color: "white",
  };

  return (
    <div>
      <ul style={styleObj}>
        <NavButton style={styleli} name="Home"></NavButton>
        <NavButton style={styleli} name="Contact Us"></NavButton>
        <NavButton style={styleli} name="About Us"></NavButton>
      </ul>
    </div>
  );
}

export default NavBar;
