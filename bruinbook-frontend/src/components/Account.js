import axios from 'axios'
import React, { useState } from 'react'

function Account(props) {
    const [Action, setAction] = useState('Loading')
    function toggle() {
        if (Action === "Unfollow") {
            axios.delete("http://localhost:3000/accounts/" + global._id + "/following/" + props.id)
            setAction('...')
        }
        else if (Action === "Follow") {
            axios.post("http://localhost:3000/accounts/" + global._id + "/following/" + props.id)
            setAction('...')
        }
    }
    axios.get("http://localhost:3000/accounts/" + global._id + "/following/" + props.id).then(response => {
        if (response.data["isFollowing"] === true) {
            setAction("Unfollow")
        }
        else {
            setAction("Follow")
        }
    })
    if (global._id !== props.id) {
        return (
            <div style={{marginBottom: 10}}>
                {props.username}
                <button style={{marginLeft: 10}} onClick={() => { toggle() }}>{Action}</button>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}


export default Account