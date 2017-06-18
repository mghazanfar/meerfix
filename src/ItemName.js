import React from 'react';
import SettingsCard from './SettingCard';
import PartnersCard from './PartnersCard';
import Form from './Form';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import call from "./call.gif";
import text from "./giphy.gif";
import Phone from "./phone.gif";
import img1 from "../src/Orient.jpg";
import img2 from "../src/palace.jpg";
import img3 from "../src/bgm.jpg";
import bahria from "./bahria_town_logo.png";
import badge from "./badge-black.png";
import Deal from "./deal.png";
import Register from "./register.png";
import Earn from "./earn.png";
import Logo from "./logo-app.png";

export default class ItemName extends React.Component {
  render() {
      var style = {
     color: this.props.color,
     backgroundColor: this.props.bgColor,
     textAlign:'center',
   };
   if(this.props.divName=="Settings"){
    return (
      <div className="py-5 png-rev" id="reviews" style={style}>
      <Container>
        <Row>
          <Col xs="3" sm="4" md="4" lg="2" className="offset-lg-5 offset-md-4 offset-sm-3 offset-3 pr-sm-0"><h1>
          {this.props.text}
          </h1></Col>
          <img width="52px" height="52px" className="borderRadius-red ml-badge" src={badge} />
        </Row>
      </Container>
        <br/>
          <Container>
            <Row>
              <Col xs="12" sm="12" md="6" lg="6" className="mb-5"><SettingsCard img={img2} logo={bahria} details="While fixing kitchens and bathrooms where electrical circuitries are also fixed, hover to see comments" title="Houses" detailsHover="Issues were fixed with reasonable charges and in time. Quality of work was superb." titleHover="Bahria palace"/></Col>
              <Col xs="12" sm="12" md="6" lg="6"><SettingsCard img={img3} logo={bahria} title="Masjid" details="We fix issues of Masajid in Bahria town for free. Hover to see what Bahria Grand mosque says about us." detailsHover="Issues were fixed without any charges and with extreme level of professionalism and quality." titleHover="Bahria - Grand Mosque"/></Col>
            </Row>
          </Container>
          </div>
    );}
    else if(this.props.divName=="Partners"){
     return (
       <div className="py-5" id="partners" style={style}>
         <h1>
         {this.props.text}
         </h1>
         <br/>
           <Container>
             <Row>
               <Col xs="12" sm="12" md="6" lg="4" className="mb-4 mb-lg-0"><PartnersCard title="Deal nicely" src={Deal} details="Want a better living? Shake hands with MèérFix."/></Col>
               <Col xs="12" sm="12" md="6" lg="4" className="mb-4 mb-lg-0"><PartnersCard title="Register" src={Register} details="Work as a certified technician by registering yourself with MèérFix."/></Col>
               <Col xs="12" sm="12" md="6" lg="4" className="mb-4 mb-lg-0"><PartnersCard title="Earn more" src={Earn} details="Give a push to your earning by working with MèérFix."/></Col>
             </Row>
           </Container>
        </div>
     );}
     else if(this.props.divName=="Easy"){
      return (
        <div className="pt-5 mt-6" id="easy" style={style}>
            <Container>
              <Row className="d-flex align-items-center text-left">
                <Col xs="12" sm="12" md="6" lg="6" className="mb-4 mb-lg-0 offset-lg-1">
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" className="mb-4 mb-lg-0">
                    <h6 className="display-4 text-muted">Vital to know</h6>
                    <h4 className="display-5 mt-4">{this.props.text}</h4>
                    <p>Just choose the technician type you need, describe your problem <a href="#tryUs"> here </a> by contacting us through:</p>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" className="text-left">
                        <h5>Sending message</h5>
                        <p>checking problem(s) in "Problem(s)" field and clicking send message button after filling for the required information.</p>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" className="text-left">
                      <h5>Calling Us</h5>
                      <p>giving us a call on the given number and providing details in order to reach you as soon as possible.</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                </Col>
                <Col xs="12" sm="12" md="6" lg="4" className="offset-lg-1 text-center">
                  <img src={Phone} className="width-change"/>
                </Col>
              </Row>
            </Container>
         </div>
      );}
     else if(this.props.divName=="PlaceOrder"){
      return (
        <div className="py-5 png" id="tryUs" style={style}>
          <h1 className="mb-5">
          {this.props.text}
          </h1>
          <br/>
            <Container>
              <Row>
                <Col xs="6"><div>
                <img width="20%" className="borderRadius" src={text} />
                <h1 className="mb-5">
                Text Us
                </h1>
                <Form/>
                </div></Col>
                <Col xs="6"><div>
                <img width="20%" className="borderRadius" src={call} />
                <h1 className="mb-5">
                Call Us
                </h1>
                <p>"Call us right away to your first splendid trial of MèérFix at 03324585276."</p>
                </div></Col>
              </Row>
            </Container>
            </div>
      );}
      else if(this.props.divName=="Footer"){
       return (
         <div className="py-5  dots" id="about" style={style}>
           <br/>
             <Container>
               <Row>
                 <Col xs="12" md="4"><div>
                 <h1 className="text-md-left">
                 MèérFix <img src={Logo} width="52"/>
                 </h1>
                 <p className="text-md-left">"With the best and very well-experienced technicians, we are committed to provide you with the properly organized and stressfree services in the region"</p>
                 </div></Col>
                 <Col xs="12" md="4">
                 <div className="pt-3">
                 <h5>
                 2017 © MèérFix
                 </h5>
                 </div>
                 </Col>
                 <Col xs="12" md="4">
                 <div className="pt-3">
                 <a href="#"><i className="fa fa-facebook-square mr-4 fontSize2" aria-hidden="true"></i></a>
                 <a href="#"><i className="fa fa-twitter-square mr-4 fontSize2" aria-hidden="true"></i></a>
                 <a href="#"><i className="fa fa-vimeo-square fontSize2 mr-4" aria-hidden="true"></i></a>
                 <a href="#"><i className="fa fa-snapchat-square fontSize2" aria-hidden="true"></i></a>
                 </div>
                 </Col>
               </Row>
             </Container>
             </div>
       );}
  }
}
