import axios from 'axios'
import React, { useState } from 'react'
import './Comment.css'
import CommentSection from './CommentSection.js'
document.body.style.zoom="100%"

function CreateComment(props) {
    const [comment, setComment] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [array, setArray] = useState(props.array.slice())
    const create = a => {
        setSubmitted(false)
        axios.post("http://localhost:3000/accounts/" + props.accountId + "/posts/" + props.postId + "/comments",
            {comment: comment,
             author: global._id
            }
        )
        setArray(array.concat([[global.user, comment]]))
        console.log(array)
        a.preventDefault()
        setSubmitted(true)
    }
    const message = <p class="msg">Comment Submitted Successfully!</p>
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
            <button type="submit" class="sub">Submit</button>
        </form>
    </div>

    return (
        <div>
            {submitted ? message : form}
            <CommentSection array={array}/>
        </div>
    )
    
}

export default CreateComment