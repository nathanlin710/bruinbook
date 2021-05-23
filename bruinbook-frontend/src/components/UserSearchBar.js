import axios from "axios"
import React, { useState } from 'react'
function UserSearchBar(){
    const [userArray, setUserArray] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userId, setuserId] = useState('')
    const follow = a => {
        if(userId === undefined){
            return;
        }
        axios.get("http://localhost:3000/accounts/" + global._id + "/following/" + userId).then(
            response => {
                if (response.data["isFollowing"] === true){
                    axios.delete("http://localhost:3000/accounts/" + global._id + "/following/" + userId)
                }
                else{
                    axios.post("http://localhost:3000/accounts/" + global._id + "/following/" + userId)
                }
            }
        );
       
        a.preventDefault()
    }
    if(loading){
        axios.get("http://localhost:3000/accounts").then( response =>
        {
        setUserArray(response.data)
        setLoading(false)
        }
    )
    }

    if(loading){
        return <p>loading</p>
    }
    if(global._id === ""){
        return <p>log in to follow people</p>
    }
    else{
        var dict = {}
        for(let i = 0; i < userArray.length; i++){
            dict[userArray[i]["username"]] = userArray[i]["_id"]
        }
        console.log(dict[1])
        return(
            <form onSubmit={follow}>
            <input onChange= {text => setuserId(dict[text.target.value])} />
            <input type ="submit" value="follow/unfollow"></input>
            </form>
        )
    }
   
}

export default UserSearchBar
