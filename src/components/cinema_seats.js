import React from "react";
import {Container,Accordion,Button,Card,Form} from "react-bootstrap";




class Accordions extends React.Component{
  render() {
    return(
      <Container required>
      <h1 className="text-center"> Choose your seats </h1>
      <Accordion defaultActiveKey="10"  >
        <Card>
          <Card.Header  bg="dark" variant="dark">
          <Accordion.Toggle as={Button}  className="btn btn-light"  eventKey="0">

            Hall 1
          </Accordion.Toggle>
          </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <p>Кол-во билетов = 45</p>
              <p>Цена билета = 300р.</p>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label> Кол-во билетов для покупки</Form.Label>
                  <Form.Control type="number" placeholder="3"/>

                </Form.Group>
                <Button variant="primary" >Next</Button>

              </Form>

              </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button}  className="btn btn-light" eventKey="1">
              Hall 2
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            <p>Кол-во билетов = 45</p>
            <p>Цена билета = 300р.</p>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label> Кол-во билетов для покупки</Form.Label>
                <Form.Control type="number" placeholder="3"/>

              </Form.Group>
              <Button variant="primary" >Next</Button>

            </Form>

            </Card.Body>
          </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button}  className="btn btn-light" eventKey="2">
                Hall 3
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
              <p>Кол-во билетов = 45</p>
              <p>Цена билета = 300р.</p>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label> Кол-во билетов для покупки</Form.Label>
                  <Form.Control type="number" placeholder="3"/>

                </Form.Group>
                <Button variant="primary" >Next</Button>

              </Form>

              </Card.Body>
            </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button}  className="btn btn-light" eventKey="3">
                  Hall 4
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                <p>Кол-во билетов = 45</p>
                <p>Цена билета = 300р.</p>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label> Кол-во билетов для покупки</Form.Label>
                    <Form.Control type="number" placeholder="3"/>

                  </Form.Group>
                  <Button variant="primary" >Next</Button>

                </Form>

                </Card.Body>
              </Accordion.Collapse>
              </Card>
        </Accordion>
      </Container>
    );
  }
}
export default Accordions;
