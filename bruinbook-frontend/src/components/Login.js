import React, { useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import './Login.css'
import './global.js'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState(<div></div>)

    const submit = e => {
        axios.post('http://localhost:3000/auth/login/', {
            username: username,
            password: password
        }, { withCredentials: true }).then((response) => {
            console.log(response)
            setMessage(<p>Login Successful</p>);
            global._id = response.data["_id"];
          }, (error) => {
            setMessage(<p>Login Failed</p>);
            console.log(error);
          });
        e.preventDefault()
        setSubmitted(true)
    }

    const form = 
        <form onSubmit={submit}>
            <label htmlFor="username">Username</label> 
            <br />
            <input
                name="username"
                value= {username}
                onChange= {text => setUsername(text.target.value)}
            />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                name="password"
                type="password"
                value = {password}
                onChange = {text => setPassword(text.target.value)}
            />
            <br />
            <br />
            <button type="submit">Login</button>
        </form>

    return (
        <div className="login-background">
            <NavBar />
            <div className='login-box'>
                {submitted ? message : form}
            </div>   
        </div>
    )
    
}

export default Login