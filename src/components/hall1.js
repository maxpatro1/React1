import React from "react";
import {Container,Form} from 'react-bootstrap'

class Box extends React.Component{
  render() {
    return(
      <Container>

      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label> Your Name</Form.Label>
          <Form.Control type="checkbox"/>

        </Form.Group>
        </Form>

      </Container>
    );
  }

  }

export default Box
