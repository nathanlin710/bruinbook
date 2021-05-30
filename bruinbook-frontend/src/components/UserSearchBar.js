import axios from "axios"
import React, { Fragment, useState } from 'react'
import NavBar from './NavBar'
import Account from './Account.js'
import './UserSearchBar.css'
function UserSearchBar() {
    const [userArray, setUserArray] = useState([])
    const [status, setStatus] = useState("loading")
    const [searchText, setSearchText] = useState("")
    var loggedIn = false;

    const search = e => {
        setStatus("loading")
        e.preventDefault()
        axios.get("http://localhost:3000/accounts?name=" + searchText).then(
            response => {
                setUserArray(response.data)
                console.log(userArray)
                setStatus("searched")
            }
        )
    }

    const form =
        <form onSubmit={search} className="search-form">
            <input
                name="searchText"
                onChange={text => setSearchText(text.target.value)}
            />
            <button type="submit">Submit</button>
        </form>

    var content = <div />
    if (status === "loading") {
        var message = <p>Please log in to search</p>
        if (global._id !== "" && !loggedIn) {
            loggedIn = true;
        }
        else {
            loggedIn = false;
        }

        content =
            <Fragment>
                {loggedIn ? form : <div />}
                {loggedIn ? <div /> : message}
            </Fragment>;

    }
    else {
        let accountArray = []
        for (let i = 0; i < userArray.length; i++) {

            accountArray.push(<Account
                username={userArray[i]["username"]}
                id={userArray[i]["_id"]}
            />)
        }
        content =
            <Fragment>
                {form}
                {accountArray}
            </Fragment>
    }

    return (
        <div className="search-background">
            <NavBar />
            <div className="search-box">
                {content}
            </div>
        </div>
    )
}

export default UserSearchBar
