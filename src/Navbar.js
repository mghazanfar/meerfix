import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Partner from './Partner';
import './App.css';

export default class Navbarr extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

      var style = {
     color: 'dodgerblue'
   };
    return (
      <div>
        <Navbar light toggleable className="fixed-top bg-trans">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/" style={style}>MèérFix</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#partners" style={style} component={Partner}><strong>Partnership</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={style} href="#tryUs"><strong>Try us now!</strong></NavLink>
              </NavItem>
              <NavItem data-target="#reviews">
                <NavLink style={style} href="#reviews"><strong>Reviews</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" style={style}><strong>About Us</strong></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
