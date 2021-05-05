function Post() {
  //test
    return (
        <div class="row">
          <div class="col">
            <form>
              <legend>New Post</legend>
              <div>
                <label>Title</label>
                <input type="text" name="title" placeholder="Title"/>
              </div>
              <div>
                <label>URL</label>
                <input type="url" name="url" placeholder="https://www.google.com"/>
              </div>
              <div>
                <label>Text</label>
                <input type="text" name="text" placeholder="Text"/>
              </div>
              <div>
                <button type="submit">Create Post</button>
              </div>
            </form>
          </div>
        </div>
    )
}
