import React from "react";
import {Container,Accordion,Toogle,Button,Card} from "react-bootstrap";



class Rows extends React.Component{
  render() {
    return(
      <Container>
      <Accordion defaultActiveKey="10" bg="dark">
        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button} className=" btn btn-light btn-lg " eventKey="0">
            Row 1
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                number of tickets:
              </Card.Body>
            </Accordion.Collapse>
        </Card>


        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button} className=" btn btn-light  "  eventKey="1">
            Row 2
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                number of tickets:
              </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button} className=" btn btn-light  " eventKey="2">
            Row 3
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                number of tickets:
              </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button}  className=" btn btn-light " eventKey="3">
            Row 4
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                number of tickets:
              </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button}  className=" btn btn-light " eventKey="4">
            Row 5
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Buy some tickets
              </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button}  className=" btn btn-light " eventKey="5">
            Row 6
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                number of tickets:
              </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
          <Accordion.Toggle as={Button} className=" btn btn-light btn-block" eventKey="6">
            Row 7
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                number of tickets:
              </Card.Body>
            </Accordion.Collapse>
        </Card>



        </Accordion>
      </Container>
    );
  }
}
export default Rows;
