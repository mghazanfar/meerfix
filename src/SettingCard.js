import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay,CardFooter } from 'reactstrap';
import "./App.css";

export default class SrttingCard extends React.Component{
  render() {
  return (
    <div>
      <Card inverse className="noBorder">
        <CardImg width="100%" className="radiusZero" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle className="mt-2">Card Title</CardTitle>
          <CardText >{this.props.details}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
        <CardFooter className="radiusZero">Footer</CardFooter>
      </Card>
    </div>
  );
}
}
