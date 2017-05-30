import React from 'react';
import SettingsCard from './SettingCard';
import PartnersCard from './PartnersCard';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import call from "./call.gif";

export default class ItemName extends React.Component {
  render() {
      var style = {
     color: this.props.color,
     backgroundColor: this.props.bgColor,
     textAlign:'center',
   };
   if(this.props.divName=="Settings"){
    return (
      <div className="mt-6 py-5" style={style}>
        <h1 className="lead">
        {this.props.text}
        </h1>
        <br/>
          <Container>
            <Row>
              <Col xs="12" sm="12" md="6" lg="4" className="mb-5"><SettingsCard details="This is a wider card with supporting text below as a natural lead-in to additional content."/></Col>
              <Col xs="12" sm="12" md="6" lg="4" className="mb-5"><SettingsCard details="This is a wider card with supporting text below as a natural lead-in to additional content."/></Col>
              <Col xs="12" sm={{ size: 12 }} md={{ size: 7, offset: "auto" }} lg={{ size: 4, offset: 0 }}><SettingsCard details="This is a wider card with supporting text below as a natural lead-in to additional content."/></Col>
            </Row>
          </Container>
          </div>
    );}
    else if(this.props.divName=="Partners"){
     return (
       <div className="py-5" style={style}>
         <h1 className="lead">
         {this.props.text}
         </h1>
         <br/>
           <Container>
             <Row>
               <Col xs="12" sm="12" md="6" lg="3" className="mb-4 mb-lg-0"><PartnersCard details="Quickly go from data to insight to action. Connect to hundreds of sources, prep data with ease, and create beautiful reports, all in minutes."/></Col>
               <Col xs="12" sm="12" md="6" lg="3" className="mb-4 mb-lg-0"><PartnersCard details="Quickly go from data to insight to action. Connect to hundreds of sources, prep data with ease, and create beautiful reports, all in minutes."/></Col>
               <Col xs="12" sm="12" md="6" lg="3" className="mb-4 mb-lg-0"><PartnersCard details="Quickly go from data to insight to action. Connect to hundreds of sources, prep data with ease, and create beautiful reports, all in minutes."/></Col>
               <Col xs="12" sm="12" md="6" lg="3" className="mb-4 mb-lg-0"><PartnersCard details="Quickly go from data to insight to action. Connect to hundreds of sources, prep data with ease, and create beautiful reports, all in minutes."/></Col>
             </Row>
           </Container>
           </div>
     );}
     else if(this.props.divName=="PlaceOrder"){
      return (
        <div className="py-5" style={style}>
          <h1 className="lead mb-5">
          {this.props.text}
          </h1>
          <br/>
            <Container>
              <Row>
                <Col xs="6" sm="5"><div>
                <img width="50%" className="borderRadius" src={call} />
                </div></Col>
                <Col xs="6" sm="7"><div>
                <h1 className="mb-5">
                Call Now
                </h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div></Col>
              </Row>
            </Container>
            </div>
      );}
      else if(this.props.divName=="Footer"){
       return (
         <div className="py-5" style={style}>
           <h1 className="lead">
           </h1>
           <br/>
             <Container>
               <Row>
                 <Col xs="6" sm="3"><div>
                 <h1 className="text-left">
                 ServMate
                 </h1>
                 <p className="text-left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
                 </div></Col>
                 <Col xs="6" sm="3">
                 <div>
                 <h5>
                 COMPANY
                 </h5>
                 </div>
                 <div>
                 <ul className="list-unstyled">
                 <li>Customer Loyalty Program</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Returns and Replacement Policies</li>
                 <li>Warranty and Claims</li>
                 </ul>
                 </div>
                 </Col>
                 <Col sm="3"><div>
                 <h5>
                 COMPANY
                 </h5>
                 </div>
                 <div>
                 <ul className="list-unstyled">
                 <li>Customer Loyalty Program</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Returns and Replacement Policies</li>
                 <li>Warranty and Claims</li>
                 </ul>
                 </div></Col>
                 <Col sm="3"><div>
                 <h5>
                 COMPANY
                 </h5>
                 </div>
                 <div>
                 <ul className="list-unstyled">
                 <li>Customer Loyalty Program</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Returns and Replacement Policies</li>
                 <li>Warranty and Claims</li>
                 </ul>
                 </div></Col>
               </Row>
             </Container>
             </div>
       );}
  }
}
