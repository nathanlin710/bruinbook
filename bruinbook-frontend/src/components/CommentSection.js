import React from "react";
import './CommentSection.css'
function CommentSection(props){
    function generateComments(){
        let allComments = []
        for(let i = 0; i < props.array.length; i++){
            allComments.push(<div><b>{props.array[i][0]}{": "}</b>{props.array[i][1]}</div>)
        }
        return allComments
    }

    return(
        <div className="CommentSection">
            {generateComments()}
        </div>
    )
}

export default CommentSection