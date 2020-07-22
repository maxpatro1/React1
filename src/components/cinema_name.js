import React from "react";


import {Container,Form,Button} from 'react-bootstrap'

class Name extends React.Component{
  render() {
    return(
      <Container style={{width:'500px'}}>
        <h1 className="text-center"> Registration Form </h1>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label> Your Name</Form.Label>
            <Form.Control type="string" placeholder="ex. Maxim"  required/>

          </Form.Group>
          <Form.Group controlId="formBasic">
            <Form.Label> Your Phone Number</Form.Label>
            <Form.Control type="int" placeholder="ex. +7(999)9999999" required / >
          </Form.Group>

            <Button variant="outline-primary" type="submit" onClick>Buy</Button>


            <Button variant="outline-primary " type="clear" >Clear</Button>

        </Form>
      </Container>
    );
  }

}
export default Name;
