import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import './App.css';


export default class PartnersCard extends React.Component{
  render() {
  return (
    <div>
      <Card block inverse className="radiusZero borderLeft text-left" style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle className="pt-5 cursor">Special Title Treatment</CardTitle>
        <CardText className="pb-4 text-white cursor">{this.props.details}
        </CardText>
        <div>
        <a href='#'className="learnMore">LEARN MORE ></a>
        </div>
      </Card>
    </div>
  );
}
}
