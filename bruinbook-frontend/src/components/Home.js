import CreatePost from './CreatePost';
import Post from './Post'
import NavBar from './NavBar'
import React, { useState } from 'react'
import axios from 'axios'


function Home () {
    const [postArray, setPostArray] = useState([])
    const [loading, setLoading] = useState(true)
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
                //parse reactions
                let reactions = [0, 0, 0, 0, 0]
                let myReactions = [false, false, false, false, false]
                let reactionId = [null, null, null, null, null]
                for(let j = 0; j < postArray[i]["reactions"].length; j++){
                    let k = postArray[i]["reactions"][j]["reactionType"]
                    console.log(postArray[i]["reactions"][j]["author"]["_id"] === global._id)
                    if(postArray[i]["reactions"][j]["author"]["_id"] === global._id){
                        myReactions[k] = true;
                        reactionId[i]=postArray[i]["reactions"][j]["_id"]
                    }
                    reactions[k] = reactions[k] + 1
                }
                allPosts.push(<Post 
                    username = {postArray[i]["author"]["username"]}
                    image = {postArray[i]["imgUrl"]}
                    caption = {postArray[i]["content"]}
                    comments = {comments}
                    accountId = {postArray[i]["author"]["_id"]}
                    postId = {postArray[i]["_id"]}
                    reactions = {reactions}
                    myReactions = {myReactions}
                    reactionId = {reactionId}
                />)
            }
            return allPosts
        }
    }

    return (
        <div>
            <NavBar />
            <CreatePost onSubmit={() => { setLoading(true) }}/>
            {generatePosts()}
        </div>
    ) 
}
export default Home;