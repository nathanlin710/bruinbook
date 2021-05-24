import CreatePost from './CreatePost';
import Post from './Post'
import NavBar from './NavBar'
import React, { useState } from 'react'
import axios from 'axios'

function Home () {
    const [postArray, setPostArray] = useState([])
    const [loading, setLoading] = useState(true)
    //why doesn't this work??
    const [attemptToLogin, setAttemptToLogin] = useState(true)
    if(global._id === ""){
        axios.get("http://localhost:3000/auth/logged_in", { withCredentials: true }).then(response =>
        {   if(response.data["logged_in"] === true){
            global._id = response.data["user"]["_id"]
            setAttemptToLogin(false)
        }}
    )
    }
    function generatePosts(){
        if(global._id === ""){
            //toggle between those 2 options for testing
            //global._id = "60a73d0f94b01a07102d3ca1"
            return <p>not logged in</p>
        }
        if (loading){
            axios.get("http://localhost:3000/accounts/" + global._id + "/feed").then(response => 
            {setPostArray(response.data)
            setLoading(false)}
        )
        }
        
        if(loading){
            return <p>Loading</p>
        }
        else{
            let allPosts = []
            for(let i = 0; i < postArray.length; i++){
                //parse for comments
                let comments = []
                for(let j = 0; j < postArray[i]["comments"].length; j++){
                    comments.push([[postArray[i]["comments"][j]["author"]["username"]], [postArray[i]["comments"][j]["comment"]]])
                }
                allPosts.push(<Post 
                    username = {postArray[i]["author"]["username"]} //after update should be ["author"]["username"]
                    image = {postArray[i]["imgUrl"]}
                    caption = {postArray[i]["content"]}
                    comments = {comments}
                    accountId = {postArray[i]["author"]["_id"]}
                    postId = {postArray[i]["_id"]}
                />)
            }
            return allPosts
        }
    }

    return (
        <div>
            <NavBar />
            <CreatePost />
            {generatePosts()}
        </div>
    ) 
}
export default Home;