import React, { useState } from "react";
import './CSS/loginsignup.css'

const LoginSignup = () => {
    const [state, setstate] = useState("Sign up");
    const handleState = () => {
        if (state === "Sign up") {
            setstate("Login")
        } else {
            setstate("Sign up")
        }
    }
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const changeHandler = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const Login = async () => {
        let responseData;
        await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
                .then((response) =>  response.json() )
                .then((data) => 
                responseData=data,
                )
        if(responseData.success){
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/")
        }
        else{
            alert(responseData.errors)
        }
    }
    const Signup = async () => {
        let responseData;
        await fetch("http://localhost:4000/signup", {
            method: "POST",
            headers: {
                Accept:'application/form-data',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
                .then((response) =>  response.json() )
                .then((data) => 
                    responseData=data,
                )
                if(responseData.success){
                    localStorage.setItem("auth-token", responseData.token)
                    window.location.replace('/')
                }
                else{
                    alert(responseData.errors)
                }
    }


    return (
        <div className="loginsingnup">
            <div className="loginsignupcontainer">
                <h1>{state}</h1>
                <div className="loginsignupfield">
                    {state === "Sign up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" /> : <></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Your Email" />
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                </div>
                <button onClick={() => { state === "Sign up" ? Signup() : Login() }}>Continue</button>
                {state === "Sign up" ? <p className="loginsignup-login">
                    Already have an account?<span onClick={() => { handleState() }}> Login here</span>
                </p> :
                    <p className="loginsignup-login">
                        Create an account?<span onClick={() => { handleState() }}> Click here</span>
                    </p>
                }


                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to terms of use and privacy policy.</p>
                </div>
            </div>

        </div>

    )
}
export default LoginSignup
