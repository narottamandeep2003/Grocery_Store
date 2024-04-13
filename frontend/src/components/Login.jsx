import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Store'

export default function Login() {
    const store = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailref = useRef();
    const passwordref = useRef();
    const navigate = useNavigate();
    let handleSubmit = (event) => {
        event.preventDefault();
        emailref.current.style.borderColor = "black";
        passwordref.current.style.borderColor = "black";
        if (email.length === 0) {
            emailref.current.style.borderColor = "red";
            return;
        }
        if (password.length === 0) {
            passwordref.current.style.borderColor = "red";
            return;
        }
        fetch(process.env.REACT_APP_API_KEY + "login", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email:email,password:password}),
        }).then(
            (res) => {
                return res.json();
            }
        ).then((data) => {
            if (data.status) {
                localStorage.setItem("user",JSON.stringify(data.user))
                store.setLogin(true)
                navigate('/');
            }
            else {
                alert("check your information again")
            }
        })
        .catch((err) => {
                console.log(err)
        })
    };
    return (
        <div className="LoginWindow">
            <form className='LoginForm'>
                <span className='LoginTitle'>log in your account</span>
                <span className='LogInWithGoogle'> <img src="./google.png" alt="" className='LoginImg' /> <span>log in with google</span> </span>
                <span className='or'>or</span>
                <div className="inputBox">
                    <label htmlFor="Email">Email <span><sup>*</sup></span></label>
                    <input ref={emailref} type="text" className='email' id='Email' placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="Password">Password <span><sup>*</sup></span></label>
                    <input ref={passwordref} type="password" className='password' id="Password" placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button className='LoginBtn' onClick={handleSubmit}>Log in</button>
                <p className='loginfooter'>Create an account <Link to="/SignUp">sign in</Link></p>
            </form>
        </div>
    )
}
