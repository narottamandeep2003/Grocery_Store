import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    let handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };
    return (
        <div className="LoginWindow">
            <form className='LoginForm'>
                <span className='LoginTitle'>log in your account</span>
                <span className='LogInWithGoogle'> <img src="./google.png" alt="" className='LoginImg' /> <span>log in with google</span> </span>
                <span className='or'>or</span>
                <div className="inputBox">
                    <label htmlFor="Email">Email <span><sup>*</sup></span></label>
                    <input type="text" className='email' id='Email' placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="inputBox">
                    <label htmlFor="Password">Password <span><sup>*</sup></span></label>
                    <input type="password" className='password' id="Password" placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button className='LoginBtn' onClick={handleSubmit}>Log in</button>
                <p className='loginfooter'>Create an account <Link to="/SignUp">sign in</Link></p>
            </form>
        </div>
    )
}
