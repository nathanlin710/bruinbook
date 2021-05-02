function Post() {
  //test
    return (
        <form>
          <legend>New Post</legend>
          <div>
            <label>Image</label>
            <input type="image" name="image"/>
          </div>
          <div>
            <label>Caption</label>
            <input type="text" name="text" placeholder="Text"/>
          </div>
          <div>
            <button type="submit">Create Post</button>
          </div>
        </form>
    );
}

function displayPost(props) {
  return (
      <article className="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src={props.avatar} />
          </div>
          <div className="Post-user-name">
            <span>{props.name}</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
          <img src = {props.image} />
      </div>
      <div className="Post-caption">
          {props.caption}
      </div>
    </article>
  );
}