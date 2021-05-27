
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NavBar.css';

function NavBar() {
    var dynamicButtons =
        (<Fragment>
            <Link className="button-link" to="/login">Login</Link>
            <Link className="button-link" to="/signup">Sign-up</Link>
        </Fragment>)

    if (global._id !== "") {
        dynamicButtons = (<Link className="button-link" onClick={() => logOut()}>Logout</Link>);
    }

    const logOut = () => {
        axios.get("http://localhost:3000/auth/logout").then(response => {
            console.log(response);
            global._id = "";
            dynamicButtons =
                (<Fragment>
                    <Link className="button-link" to="/login">Login</Link>
                    <Link className="button-link" to="/signup">Sign-up</Link>
                </Fragment>)
        }
        )
    }

    return (
        <div className="bar">
            <Link className="button-link" to="/">Home</Link>
            <Link className="button-link" to="/UserSearchBar">UserSearchBar</Link>
            {dynamicButtons}
        </div>
    )

}

export default NavBar