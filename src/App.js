import React, { Component } from 'react';
import logo from './servMate-logo.png';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Navbar';
import Slick from './SlickCarousel';
import ItemName from './ItemName';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Slick />
        <ItemName text="Settings" color="red" bgColor="black" divName="Settings"/>
        <ItemName text="Partners" color="red" bgColor="black" divName="Partners"/>
        <ItemName text="Place Order" color="black" bgColor="red" divName="PlaceOrder"/>
        <ItemName  color="white" bgColor="black" divName="Footer"/>
      </div>
    );
  }
}

export default App;
