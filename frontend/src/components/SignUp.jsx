import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function SignUp() {
    const [form, setForm] = useState({ email: "", userName: "", password: "", confirmPassword: "" })
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();
    let handleSubmit = (event) => {
        event.preventDefault();

        let hasEmptyValue = false;

        for (let key in form) {
            let val = form[key];

            if (key === "email") {
                if (val.length === 0) {
                    email.current.style.borderColor = "red";
                    hasEmptyValue = true;
                } else {
                    email.current.style.borderColor = "black";
                }
            }

            if (key === "userName") {
                if (val.length === 0) {
                    username.current.style.borderColor = "red";
                    hasEmptyValue = true;
                } else {
                    username.current.style.borderColor = "black";
                }
            }

            if (key === "password") {
                if (val.length === 0) {
                    password.current.style.borderColor = "red";
                    hasEmptyValue = true;
                } else {
                    password.current.style.borderColor = "black";
                }
            }

            if (key === "confirmPassword") {
                if (val.length === 0) {
                    confirmPassword.current.style.borderColor = "red";
                    hasEmptyValue = true;
                } else {
                    confirmPassword.current.style.borderColor = "black";
                }
            }
        }

        if (hasEmptyValue) {
            return;
        }

        if (form.password !== form.confirmPassword) {
            password.current.style.borderColor = "red";
            confirmPassword.current.style.borderColor = "red";
            return;
        }




        fetch(process.env.REACT_APP_API_KEY + "signUp", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then(
            (res) => {
                return res.json();
            }
        ).then((data) => {
            if (data.status) {
                navigate('/Login');
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
            <form className='LoginForm' onSubmit={(e) => { handleSubmit(e) }}>
                <span className='LoginTitle'>Create your account</span>
                <span className='LogInWithGoogle'> <img src="./google.png" alt="" className='LoginImg' /> <span>log in with google</span> </span>
                <span className='or'>or</span>
                <div className="inputBox">
                    <label htmlFor="Name">User Name <span><sup>*</sup></span></label>
                    <input ref={username} type="text" className='email' id='Name' placeholder='User Name' value={form.userName} onChange={(e) => { setForm({ ...form, userName: e.target.value }) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="Email">Email <span><sup>*</sup></span></label>
                    <input ref={email} type="text" className='email' id='Email' placeholder='Enter your email' value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="Password">Password <span><sup>*</sup></span></label>
                    <input ref={password} type="password" className='password' id="Password" placeholder='Enter your password' value={form.password} onChange={(e) => { setForm({ ...form, password: e.target.value }) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="CPassword">Confirm Password <span><sup>*</sup></span></label>
                    <input ref={confirmPassword} type="password" className='password' id="CPassword" placeholder='Confirm password' value={form.confirmPassword} onChange={(e) => { setForm({ ...form, confirmPassword: e.target.value }) }} />
                </div>
                <button className='LoginBtn' type="submit" >Sign up</button>
                <p className='loginfooter'>Alreay have an account <Link to="/Login">log in</Link></p>
            </form>
        </div>
    )
}
