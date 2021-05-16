import React, { useState } from 'react'
import './Comment.css'
document.body.style.zoom="100%"

function CreateComment() {
    const [comment, setComment] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const create = a => {
        a.preventDefault()
        setSubmitted(true)
    }
    const message = <p class="message">Comment Submitted Successfully!</p>
    const form = 
    <div class="outside">
        <form onSubmit={create} class="boxarea">
            <textarea
                class="box"
                rows="5"
                value = {comment}
                placeholder="Write a comment..." required
                onChange = {text => setComment(text.target.value)}
            />
            <br />
            <br />
            <button type="submit" class="share">Submit</button>
        </form>
    </div>

    return (
        <div>
            {submitted ? message : form}
        </div>
    )
    
}

export default CreateComment