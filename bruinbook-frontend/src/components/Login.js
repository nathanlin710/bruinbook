
import React, { useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submit = e => {
        axios.post('http://localhost:3000/auth/login', {
            name: email,
            username: email,
            password: password
        })
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
                value= {email}
                onChange= {text => setEmail(text.target.value)}
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