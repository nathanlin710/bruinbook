import axios from "axios"
import React, { useState } from 'react'
import NavBar from './NavBar'
import Account from './Account.js'
function UserSearchBar() {
    const [userArray, setUserArray] = useState([])
    const [status, setStatus] = useState("loading")
    const [searchText, setSearchText] = useState("")
    var loggedIn = false;

    const search = e => {
        e.preventDefault()
        console.log({searchText})
        axios.get("http://localhost:3000/accounts").then(
            response => {
                setUserArray(response.data)
                setStatus("searched")
            }
        )
    }

    const form =
        <form onSubmit={search}>
            <input
                name="searchText"
                onChange={text => setSearchText(text)}
            />
            <button type="submit">Submit</button>
        </form>

    if (status === "loading") {
        var message = <p>You must log in to search or else you will break the website!</p>
        if (global._id !== "" && !loggedIn){
            loggedIn = true;
        }
        else{
            loggedIn = false;
        }
        return (
            <div>
                <NavBar />
                {form}
                {loggedIn ? <div/> : message}
            </div>
        )
    }
    else {
        let accountArray = []
        for (let i = 0; i < userArray.length; i++) {

            accountArray.push(<Account
                username={userArray[i]["username"]}
                id={userArray[i]["_id"]}
            />)
        }
        return (
            <div>
                <NavBar />
                {form}
                {accountArray}
            </div>
        )
    }


}

export default UserSearchBar
