import React, {Component} from 'react';
import './Card.css';
// import Alaska from './alaska.jpg'
// import Iceland from './iceland.jpg'
// import Croatia from './croatia.jpg'

class Card extends Component{
    render(){
        let imgSrc = require(`./${(this.props.img)}`);
        return(
            <div className = "Card">
                <img src = {imgSrc} className="Card-img"/>
                <div className = "Rating">
                    <h4>{this.props.rating}</h4>
                </div>
                <div className = "Info">
                    <h1>{this.props.name}</h1>
                    <h3>{this.props.tag}</h3>
                    
                </div>
            </div>
        )
    }
}

export default Card;