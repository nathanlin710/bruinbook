
import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false)

    const notLoggedButtons = 
        (<Fragment>
            <Link className="button-link" to="/login">Login</Link>
            <Link className="button-link" to="/signup">Sign-up</Link>
        </Fragment>)
    return (
        <div className="bar">
            <Link className="button-link" to="/">Home</Link>
            {loggedIn ? <button className="button-link" onClick={() => setLoggedIn(false)}/> : notLoggedButtons}     
        </div>
    )
    
}

export default NavBar