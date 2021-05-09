import React, { useState } from 'react'
import './CreatePost.css'
document.body.style.zoom="100%"


function CreatePost() {
    const [title, setTitle] = useState('')
    const [caption, setCaption] = useState('')
    const [picture, setPicture] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const create = a => {
        a.preventDefault()
        setSubmitted(true)
    }
    const message = <p class="message">Post Created Successfully!</p>
    const form = 
    <div class="background">
        <form onSubmit={create} class="formarea">
            <h3 class="header">Create Post</h3>
            <label htmlFor="title">Title</label> 
            <br />
            <input
                class="input"
                name="title"
                type="text"
                value= {title}
                placeholder="What's on your mind?" required
                onChange= {text => setTitle(text.target.value)}
            />
            <br />
            <br />
            <label htmlFor="picture">Image</label>
            <br />
            <input
                class="input"
                name="picture"
                type="url"
                value = {picture}
                placeholder="Type a URL" required
                onChange = {text => setPicture(text.target.value)}
            />
            <br />
            <br />
            <label htmlFor="caption">Caption</label>
            <br />
            <textarea
                class="input"
                name="caption"
                rows="5"
                value = {caption}
                placeholder="Write a caption..." required
                onChange = {text => setCaption(text.target.value)}
            />
            <br />
            <br />
            <button type="submit" class="share">Share</button>
        </form>
    </div>

    return (
        <div>
            {submitted ? message : form}
        </div>
    )
    
}

export default CreatePost
