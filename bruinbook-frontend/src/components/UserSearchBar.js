import axios from "axios"
import React, { useState } from 'react'
import NavBar from './NavBar'
import Account from './Account.js'
function UserSearchBar(){
    const [userArray, setUserArray] = useState([])
    const [status, setStatus] = useState("loading")
    var searchText;

    const search = e => {
        e.preventDefault()
        console.log(searchText)
        axios.get("http://localhost:3000/accounts").then(
            response => {
                
                setUserArray(response.data)
                setStatus("searched")
                console.log("hello")
            }
        )
    }

    const form = 
        <form onSubmit={search}>
            <input
                name="searchText"
                onChange= {text => searchText = text.target.value}
            />
            <button type="submit" class="Search">Submit</button>
        </form>

if(status ==="loading"){
    return(
        <div>
        <NavBar/>
        {form}
        <p>You must log in to search or else you will break the website!</p>
        </div>
    )
}
else{
    let accountArray = []
    for(let i = 0; i < userArray.length; i++){

        accountArray.push(<Account 
            username = {userArray[i]["username"]}
            id = {userArray[i]["_id"]}
        />)
    }
    return(
        <div>
        <NavBar/>
        {form}
        {accountArray}
        </div>
    )
}
    
   
}

export default UserSearchBar
