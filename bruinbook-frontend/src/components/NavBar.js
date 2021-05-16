
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className="bar">
            <Link className="button-link" to="/">Home</Link>
            <Link className="button-link" to="/login">Login</Link>
            <Link className="button-link" to="/signup">Sign-up</Link>
        </div>
    )
    
}

export default NavBar