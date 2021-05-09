import React from "react";
import styles from './Post.css';

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
          <img className = "image" src = {props.image} height='400' />
      </div>
      <div className="caption-box">
        <p className = "caption">{props.caption}</p>
      </div>
    </article>
  );
}

class Page extends React.Component{
  //eventually render by post ID
  renderPost(username, image, caption){
    return(
      <Post 
      username = {username}
      image = {image}
      caption = {caption}
    />
    );
  }

  render(){
    return(
      <div>
        {this.renderPost("Eggman", "eggman.jpg", "Hello world, I am Mr. Eggman. You fool, away! Before I make mincemeat out of you! Curse you, Sonic! Not only do you foil my plans, but you foil my speeches as well! I work hard on them!")}
        <div>
        {this.renderPost("Sonic", "sonic.jpg", "Zoom Zoom, I'm off to visit UCLA. You don't think your prolonged isolation is making you a bit crazy, perhaps? (as the patient, lying on the couch) Crazy?! Me? No way, Doc. You got me all wrong. (back as the doctor) And despite all these so-called friends of yours, (takes off the glasses, normal voice) deep down, (sad) you're still rather lonely?")}
        </div>
      </div>
    )
  }
}

export default Page