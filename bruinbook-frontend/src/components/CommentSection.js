import React from "react";
import './CommentSection.css'
function CommentSection(props){
    let allComments = []
    function append(string){
        allComments.append(string)
    }
    function generateComments(){
        
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