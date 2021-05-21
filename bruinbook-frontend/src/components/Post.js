import React from "react";
import './Post.css';
import ReactionBar from './ReactionBar.js';
import CommentSection from './CommentSection.js'
import CreateComment from "./Comment.js";

// renders a Post component
function Post(props) {
  return (
      <article className="Post">
      <header>
        <div className="user-box">
          <div className="username">
            <span>{props.username}</span>
          </div>
        </div>
      </header>
      <div className="image-box">
          <img className = "image" src ={props.image} alt="" width="70%"/>
      </div>
      <div className="caption-box">
        <p className = "caption">{props.caption}</p>
      </div>
      <div>
        <ReactionBar/>
      </div>
      <div>
        <CreateComment/>
      </div>
      <div>
        <CommentSection array={props.comments}/>
      </div>
    </article>
  );
}

export default Post