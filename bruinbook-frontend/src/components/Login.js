import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submit = e => {
        e.preventDefault()
        console.log(email + ',' + password)
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
            {submitted ? message : form}
        </div>
    )
    
}

export default Login