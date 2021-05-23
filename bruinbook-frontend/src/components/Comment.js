import axios from 'axios'
import React, { useState } from 'react'
import './Comment.css'
document.body.style.zoom="100%"

function CreateComment(props) {
    const [comment, setComment] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const create = a => {
        axios.post("http://localhost:3000/accounts/" + props.accountId + "/posts/" + props.postId + "/comments",
            {comment: comment,
             author: global._id
            }
        )
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