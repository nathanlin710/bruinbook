
import React, { useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submit = e => {
        axios.post('http://localhost:3000/login/', {
            name: email,
            password: password
        })
        e.preventDefault()
        setSubmitted(true)
    }

    const message = <p>Sent Login</p>
    const form = 
        <form onSubmit={submit}>
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
        <div>
            <NavBar />
            {submitted ? message : form}
        </div>
    )
    
}

export default Login