import React from "react";
import Formatio from "../components/FormatioHead/Formatio";
import LoginDialog from "../components/LoginDialog/LoginDialog";

function SigninPage() {
  return (
    <div>
      <Formatio />
      <div style={{ textAlign: "center", paddingTop: "200px" }}>
        <LoginDialog type="text"></LoginDialog>
        <LoginDialog type="password"></LoginDialog>
        {/* button style comes from landingpagebtn */}
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default SigninPage;
