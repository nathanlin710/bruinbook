import React, { useState } from 'react'
import axios from 'axios';
import NavBar from './NavBar'
import './Signup.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState(<div></div>);

    const submit = e => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/register/', {
            username: email,
            password: password
        })
        .then((response) =>{
            console.log('done');
            setMessage(<p>Account has been created!</p>);
        }, (error) => {
            console.log('failed');
            setMessage(<p>Something went wrong, try again.</p>)
        });
        setSubmitted(true)
    }

    const form = 
    <div>
        <h1>Signup</h1>
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
            <button type="submit">Submit</button>
        </form>
    </div>

    return (
        <div className='signup-background'>
            <NavBar />
            <div className="signup-box">
                {submitted ? message : form}
            </div>
        </div>
    )
    
}

export default Signup