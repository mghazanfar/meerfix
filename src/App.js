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
        <ItemName text="Easy as pie" color="black" bgColor="white" divName="Easy"/>
        <ItemName text="Improve your living" color="dodgerblue" bgColor="black" divName="Partners"/>
        <ItemName color="white" bgColor="dodgerblue" divName="PlaceOrder"/>
        <ItemName text="Reviews" color="dodgerblue" bgColor="black" divName="Settings"/>
        <ItemName  color="white" bgColor="dodgerblue" divName="Footer"/>
      </div>
    );
  }
}

export default App;
