import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  sayHi(){
  var txtName1 = document.getElementById("txtName1");
  var txtName2 = document.getElementById("txtName2");
  var txtName3 = document.getElementById("txtName3");
  var txtName4 = document.getElementById("txtName4");
  var txtName5 = document.getElementById("txtName5");
  var txtName6 = document.getElementById("txtName6");
  var txtName7 = document.getElementById("txtName7");
  var txtName8 = document.getElementById("txtName8");
  var txtOutput = document.getElementById("txtOutput");
  var name1 = txtName1.value;
  var name2 = txtName2.value;
  var name3 = txtName3.value;
  var name4 = txtName4.value;
  var name5 = txtName5.value;
  var name6 = txtName6.value;
  var name7 = txtName7.value;
  var name8 = txtName8.value;
  txtOutput.value = "Your problem/s: " + name1 + ", " + name2 + ", " + name3 + ", " + name4 + ", " + name5 + ", " + name6 + ", " + name7 + ", " + name8 + "."
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Form>
      <FormGroup>
        <Label for="txtOutput">Problem(s)</Label>
        <Input type="textarea" name="text" id="txtOutput" onClick={this.toggle} />
      </FormGroup>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className=" modal-lg">
          <ModalHeader toggle={this.toggle}>Select problems from below:</ModalHeader>
          <ModalBody>
          <Container>
            <Row>
              <Col xs="12" sm="12" md="6" lg="4">
              <h4>Electrical Problems:</h4>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName1" value="Check me out"/>
                  Socket problem
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName2" value="Check me out" />
                  Fan dimmer is not working properly
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName3" value="Check me out" />
                  Lines fault detection
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName4" value="Check me out" />
                  Light replacement
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName5" value="Check me out" />
                  Installation of a conduit
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check value="Check me out">
                  <Input type="checkbox"  id = "txtName6" value="Check me out" />
                  UPS repairing
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Generator/UPS connection
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Fitting of lights
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Light holder replacement
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Fan installation
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  LED rope light fixture
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Circuit breaker tripping
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Naked wires after renovation
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Smell is coming out of your switches
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  New distribution box installation
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  IT cable installation
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Television cable installation
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Fixing some new socket
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Rope light designing for rooms
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id = "txtName7" value="Check me out"  />
                  Refrigerator not working
                </Label>
              </FormGroup>
              <FormGroup row>
              <Label for="exampleEmail2" sm={12}><a class="tooltip-test" title="Please specify"><b>Other</b></a></Label>
              <Col sm={12}>
              <Input type="text" name="Problem/s" id="exampleEmail2" id = "txtName8" placeholder="Problem/s" />
              </Col>
              </FormGroup>
              </Col>
              <Col xs="12" sm="12" md="6" lg="4">
              <h4>Plumbing problems:</h4>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Pipeline blockage
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Water supply problem
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Installation of geazer
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Installation od motor pump
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Repair of motor
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  New motor belt required
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Broken tap
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Replacement of tap
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  Comod tank repairing
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  New basin fixture
                </Label>
              </FormGroup>
              <FormGroup row>
              <Label for="exampleEmail2" sm={12}><a class="tooltip-test" title="Please specify"><b>Other</b></a></Label>
              <Col sm={12}>
              <Input type="Problem/s" name="email" id="exampleEmail2" placeholder="Problem/s" />
              </Col>
              </FormGroup>
              </Col>
              <Col xs="12" sm="12" md="6" lg="4">
              <h4>Painter problems:</h4>
              <p>Any work can be done: charges for paint work will depend upon square feet as we charge Rs.8/sq.feet (From filling to coats of paint)</p>
              <FormGroup row>
              <Label for="exampleEmail2" sm={12}><a class="tooltip-test" title="Please specify"><b>Write your own painter problem(s)</b></a></Label>
              <Col sm={12}>
              <Input type="Problem/s" name="email" id="exampleEmail2" placeholder="Problem/s" />
              </Col>
              </FormGroup>
              <br/>
              <p><strong>Note: </strong> Price quoted does not include material.</p>
              </Col>
              </Row>
          </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.sayHi}>Save Problems</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Type your name" />
      </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="name" name="number" id="exampleNumber" placeholder="e.g. 0333-xxxxxxx" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Address</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button color="primary">Send message</Button>
      </Form>
    );
  }
}
