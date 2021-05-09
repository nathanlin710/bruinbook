import React, { useState } from 'react'
import styles from './CreatePost.css'

function CreatePost() {
    const [title, setTitle] = useState('')
    const [caption, setCaption] = useState('')
    const [picture, setPicture] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const create = a => {
        a.preventDefault()
        setSubmitted(true)
    }
    const message = <p>Post Created Successfully!</p>
    const form = 
        <form onSubmit={create}>
            <h3>Create Post</h3>
            <label htmlFor="title">Title</label> 
            <br />
            <input
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
                name="caption"
                rows="5"
                cols="51"
                value = {caption}
                placeholder="Write a caption..." required
                onChange = {text => setCaption(text.target.value)}
            />
            <br />
            <br />
            <button type="submit">Share</button>
        </form>

    return (
        <div>
            {submitted ? message : form}
        </div>
    )
    
}

export default CreatePost
