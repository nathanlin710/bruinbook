import React from "react";
import './ReactionBar.css';
import Reaction from "./Reaction.js";

class ReactionBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClicked: Array(5).fill(false),
            buttonTotal: [300, 400, 200, 100, 200],
            icons: ["heart", "eggert", "cat", "thumb", "bruin"]
        };
    }

    handleClick(i){
        const buttonClicked = this.state.buttonClicked.slice();
        const buttonTotal = this.state.buttonTotal.slice();
        const icons = this.state.icons.slice();
        if (buttonClicked[i] === true){
            buttonClicked[i] = false;
            icons[i] = icons[i].slice(0, -7);
            buttonTotal[i] = buttonTotal[i] - 1;
            //alert server
        }
        else{
            buttonClicked[i] = true;
            icons[i] = icons[i] + "clicked";
            buttonTotal[i] = buttonTotal[i] + 1;
            //alert server
        }
        this.setState({
            buttonClicked: buttonClicked,
            buttonTotal: buttonTotal,
            icons: icons
        });
    }

    renderReaction(i){
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