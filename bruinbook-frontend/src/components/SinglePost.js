import axios from "axios";
import React, {useState} from "react";
import NavBar from './NavBar'
import Post from "./Post";

function SinglePost(props) {
    let username = props.match.params.username;
    let id = props.match.params.id;
    const [info, setInfo]= useState([])
    const [loading, setLoading] = useState(true)
    var result = <div></div>;
    if(loading){
        axios.get('http://localhost:3000/accounts/' + username + '/posts/' + id)
        .then((response) =>{
            setInfo(response.data);
            setLoading(false)
        }, (error) => {
            console.log('failed');
        });
    }
    
    
        if (loading == false) {
            console.log(info["comments"])
            let comments = []
            for(let j = 0; j < info["comments"].length; j++){
                comments.push([[info["comments"][j]["author"]["username"]], [info["comments"][j]["comment"]]])
            }
            //parse reactions
            let reactions = [0, 0, 0, 0, 0]
            let myReactions = [false, false, false, false, false]
            let reactionId = [null, null, null, null, null]
            for(let j = 0; j < info["reactions"].length; j++){
                let k = info["reactions"][j]["reactionType"]
                console.log(info["reactions"][j]["author"]["_id"] === global._id)
                if(info["reactions"][j]["author"]["_id"] === global._id){
                    myReactions[k] = true;
                    reactionId[k]=info["reactions"][j]["_id"]
                }
                console.log(reactionId)
                reactions[k] = reactions[k] + 1
            }
            result = <Post 
            username = {info["author"]["username"]}
            image = {info["imgUrl"]}
            caption = {info["content"]}
            comments = {comments}
            accountId = {info["author"]["_id"]}
            postId = {info["_id"]}
            reactions = {reactions}
            myReactions = {myReactions}
            reactionId = {reactionId}
            />
        } 
  return (
    <div>
        <NavBar />
        {result}
    </div>
  );
}

export default SinglePost;
