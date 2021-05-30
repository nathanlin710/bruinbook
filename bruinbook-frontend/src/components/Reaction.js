import React from "react";
import './Reaction.css';
function Reaction(props){
    let fileName = props.icon + ".png";
    console.log(fileName)
    return(
        <button className="button" onClick={() => props.onClick()}>
            <img src ={window.location.origin + "/" + fileName} alt = "" height='30' width='30' />
            <div>
                {props.number}
            </div>
        </button>
    )
}

export default Reaction