
import React, {Component} from 'react';
import './Cards.css';
import Card from './Card';

class Cards extends Component{
    static defaultProps = {
        data:[
        {name: 'Alaska', rating: 4.8, tag: '52 must see places', img: 'alaska.jpg'},
        {name: 'Iceland', rating: 5, tag: '28 must see places', img: 'iceland.jpg'},
        {name: 'Croatia', rating: 4.3, tag: '15 must see places',img:'croatia.jpg'}
      ]
    };
    render(){
        return(
            <div>
                <div className="Right">
                    <div className = "Links">
                        <h4>Gallery Stories</h4>
                    </div>
                    <div className = "Discover">
                        <h2>Discover</h2>
                    </div>
                    <div className = "DiscoverTypes">
                        <h3>Popular Adventure Tour</h3>
                    </div>
                </div>
                <div className = "Cards">
                    {this.props.data.map((c)=>(
                        <Card name={c.name} rating={c.rating} tag={c.tag} img={c.img}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Cards;





