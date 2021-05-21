import CreatePost from './CreatePost';
import Post from './Post'
import NavBar from './NavBar'
import React, { useState } from 'react'
import axios from 'axios'

function Home () {
    const [postArray, setPostArray] = useState([])
    const [loading, setLoading] = useState(true)

    function generatePosts(){
        if (loading){
            axios.get("http://localhost:3000/accounts/60a35c41d5dbf13014e4cf1b/posts").then(response => 
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
                allPosts.push(<Post 
                    username = {postArray[i]["author"]}
                    image = {postArray[i]["imgUrl"]}
                    caption = {postArray[i]["content"]}
                    comments = {[["user1", "hello there"], ["user2", "hello bear"], ["TSM LOST", "pew pew"], ["user2", "hello bear"], ["TSM LOST", "pew pew"], ["user2", "hello bear"], ["TSM LOST", "pew pew"]]}
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