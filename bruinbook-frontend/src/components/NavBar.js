
import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NavBar.css';

function NavBar() {
    const [dynamicButtons, setDynamicButtons] = useState(<Fragment>
        <Link className="button-link" to="/login">Login</Link>
        <Link className="button-link" to="/signup">Signup</Link>
    </Fragment>)

    if (global._id !== "") { //logged in
        if (dynamicButtons.type === React.Fragment){
            setDynamicButtons(<Link className="button-link" to="#" onClick={() => logOut()}>Logout</Link>);
        }        
    }
    else { //logged out
        if (dynamicButtons === null){
            setDynamicButtons(
                <Fragment>
                    <Link className="button-link" to="/login">Login</Link>
                    <Link className="button-link" to="/signup">Signup</Link>
                </Fragment>
            )
        }
    }

    const logOut = () => {
        axios.get("http://localhost:3000/auth/logout", { withCredentials: true }).then(response => {
            console.log(response);
            global._id = "";
            setDynamicButtons(null)
        })
    }

    return (
        <div className="bar">
            <Link className="button-link" to="/">Home</Link>
            <Link className="button-link" to="/UserSearchBar">Search</Link>
            {dynamicButtons}
        </div>
    )

}

export default NavBar