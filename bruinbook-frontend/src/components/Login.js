import React, { useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import './Login.css'
import './global.js'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submit = e => {
        axios.post('http://localhost:3000/auth/login/', {
            username: username,
            password: password
        }, { withCredentials: true }).then((response) => {
            console.log(response)
            global._id = response.data["_id"];
          }, (error) => {
            console.log(error);
          });
        e.preventDefault()
        setSubmitted(true)
    }

    const message = <p>Sent Login</p>
    const form = 
        <form onSubmit={submit} className='login-box'>
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
            <div>
                {submitted ? message : form}
            </div>   
        </div>
    )
    
}

export default Login