import React, {Component} from 'react';
import './Header.css';
import Mountain from './mountain.jpg'
import Portrait from './portrait.jpg'

class Header extends Component{
    render(){
        return(
            <div className="Grid">
                <div className="Left">
                    <div className="Company">
                        <h3>TooTravel</h3>
                    </div>
                    <div className="Header">
                        <h1>The most beautiful places in the world!</h1>
                    </div>
                    <div className="Description">
                        <h4>Plan your vacation on the most beautiful places in the world...</h4>
                    </div>
                    <div className = "Button">
                        <h1>Get Started Now!</h1>
                    </div>
                    <img src={Mountain} className="Mountain" />
                </div>
                <div className='Portrait'>
                        <img className="PortraitImg" src={Portrait}></img>
                </div>
            </div>
        )
    }
}

export default Header;