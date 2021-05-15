import React from "react";
import './Reactions.css';

function Button(props){
    let fileName = props.icon + ".png";
    return(
        <button className="button" onClick={() => props.onClick()}>
            <img src = {fileName} alt = "" height='30' width='30' />
            <div>
                {props.number}
            </div>
        </button>
    )
}

class ReactionBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttonClicked: Array(5).fill(false),
            buttonTotal: [300, 400, 200, 100, 200],
            icons: ["heart", "heart", "heart", "heart", "bruin"]
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

    renderButton(i){
        return(<Button
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
                    {this.renderButton(0)}
                </div>
                <div>
                    {this.renderButton(1)}
                </div>
                <div>
                    {this.renderButton(2)}
                </div>
                <div>
                    {this.renderButton(3)}
                </div>
                <div>
                    {this.renderButton(4)}
                </div>
            </div>
            </div>
        )
    }
}

export default ReactionBar