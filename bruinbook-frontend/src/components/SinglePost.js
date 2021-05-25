import axios from "axios";
import React from "react";
import NavBar from './NavBar'
import Post from "./Post";

function SinglePost() {
    let username = this.props.match.params.username;
    let id = this.props.match.params.id;
    var info = null;

    var result = <div></div>;

    axios.get('http://localhost:3000/acccounts/' + username + '/posts/' + id)
        .then((response) =>{
            info = response;
            console.log(info);
        }, (error) => {
            console.log('failed');
        });
    
        if (info !== null) {
            result = <Post username={info.caption} />
        } 
  return (
    <div>
        <NavBar />
        {result}
    </div>
  );
}

export default SinglePost;
