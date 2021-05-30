import React from "react";
import './Post.css';
import ReactionBar from './ReactionBar.js';
import CommentSection from './CommentSection.js'
import CreateComment from "./Comment.js";

// renders a Post component
function Post(props) {
  let link = "http://localhost:3001/post/" + props.accountId + "/" + props.postId
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
        <ReactionBar accountId={props.accountId} postId={props.postId} reactions={props.reactions} myReactions={props.myReactions} reactionId={props.reactionId}/>
      </div>
      <div>
        <CreateComment accountId={props.accountId} postId={props.postId}/> 
      </div>
      <div>
        <CommentSection array={props.comments} />
      </div>
      <div className = "sharepost">
        <p>Share this Post using the link</p>
        <a href={link}>{link}</a>
      </div>
    </article>
  );
}

export default Post