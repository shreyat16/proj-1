import React, {Component} from 'react';
import './Capsule.css';

class Capsule extends Component{
    render(){
        return(
            <div className = "Capsule">
                <div className = "Emoji">
                    <h1>{this.props.emoji}</h1>
                </div>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}

export default Capsule;