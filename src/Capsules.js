import React, {Component} from 'react';
import './Capsules.css';
import Capsule from './Capsule'

class Capsules extends Component{
    static defaultProps = {
        capsuleData:[
        {name: 'All', emoji:' ✈️'},
        {name: 'Solo', emoji:' 👩🏻'},
        {name: 'Luxury', emoji:' ⭐️'},
        {name: 'Safari', emoji:' 🦁'},
        {name: 'Food', emoji:' 🍕'}
      ]
    };
    render(){
        return(
            <div>
                <div className = "TypesofTravel">
                    <h2>Types of Travel</h2>
                </div>
                <div className = "Capsules">
                    {this.props.capsuleData.map((p)=>(
                        <Capsule name={p.name} emoji={p.emoji}/>
                    ))}         
                </div>
            </div>
        )
    }
}

export default Capsules;
