import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Cards from './Cards';
import Capsules from './Capsules';

class App extends Component{
  render(){
    return (
        <div>
          <div className = "RightPage">
            <Cards/>
            <Capsules/>
          </div>
          <div className = "LeftPage">
            <Header/>
          </div>
        </div>
    );
  }
}

export default App;
