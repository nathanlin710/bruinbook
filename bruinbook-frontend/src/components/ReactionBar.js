import React from "react";
import './ReactionBar.css';
import Reaction from "./Reaction.js";
import axios from "axios";

class ReactionBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClicked: this.props.myReactions,
            buttonTotal: this.props.reactions,
            reactionId: this.props.reactionId,
            icons: ["heart", "eggert", "cat", "thumb", "bruin"]
        };
        for(let i = 0; i < this.state.buttonClicked.length; i++){
            if(this.state.buttonClicked[i] == true){
                this.state.icons[i] = this.state.icons[i] + "clicked"
            }
        }
    }
   
    handleClick(i){
        const buttonClicked = this.state.buttonClicked.slice();
        const buttonTotal = this.state.buttonTotal.slice();
        const icons = this.state.icons.slice();
        const reactionId = this.state.reactionId.slice();
        if (buttonClicked[i] === true){
            buttonClicked[i] = false;
            icons[i] = icons[i].slice(0, -7);
            buttonTotal[i] = buttonTotal[i] - 1;
            axios.delete("http://localhost:3000/accounts/" + this.props.accountId + "/posts/" + this.props.postId + "/reactions/" + this.state.reactionId)
        }
        else{
            buttonClicked[i] = true;
            icons[i] = icons[i] + "clicked";
            buttonTotal[i] = buttonTotal[i] + 1;
            console.log(this.state.reactionId[i])
            axios.post("http://localhost:3000/accounts/" + this.props.accountId + "/posts/" + this.props.postId + "/reactions", {author: global._id,
            reactionType: i
           }).then(response => reactionId[i] = response.data["_id"])
            //alert server
        }
        this.setState({
            buttonClicked: buttonClicked,
            buttonTotal: buttonTotal,
            icons: icons
        });
    }

    renderReaction(i){
        console.log(this.props.myReactions)
        return(<Reaction
            icon={this.state.icons[i]}
            number={this.state.buttonTotal[i]}
            onClick={() => this.handleClick(i)}
            />)
    }

    render(){
        return(
            <div class ="bar-container">
            <div class="flex-container">
                <div>
                    {this.renderReaction(0)}
                </div>
                <div>
                    {this.renderReaction(1)}
                </div>
                <div>
                    {this.renderReaction(2)}
                </div>
                <div>
                    {this.renderReaction(3)}
                </div>
                <div>
                    {this.renderReaction(4)}
                </div>
            </div>
            </div>
        )
    }
}

export default ReactionBar