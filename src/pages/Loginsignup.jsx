import React from "react";
import './CSS/loginsignup.css'

const LoginSignup=()=>{
    return(
<div className="loginsingnup">
<div className="loginsignupcontainer">
    <h1>Sign Up</h1>
    <div className="loginsignupfield">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email"/>
        <input type="password" placeholder="Password"/>
    </div>
    <button>Continue</button>
    <p className="loginsignup-login">
        Already have an account?<span> Login here</span>
    </p>
    <div className="loginsignup-agree">
        <input type="checkbox" name="" id=""/>
        <p>By continuing, i agree to terms of use and privacy policy.</p>
    </div>
</div>

</div>

    )
}
export default LoginSignup
