import React, { useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import './Signup.css'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submit = e => {
        axios.post('http://localhost:3000/auth/register/', {
            name: email,
            username: email,
            password: password
        })
        e.preventDefault()
        console.log(email + ',' + password)
        setSubmitted(true)
    }

    const message = <p>Account has been created!</p>
    const form = 
        <form onSubmit={submit} className='signup-box'>
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
            <button type="submit">Submit</button>
        </form>

    return (
        <div className='signup-background'>
            <NavBar />
            {submitted ? message : form}
        </div>
    )
    
}

export default Signup