import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'
import logo from "./logo192.png"

class Header extends React.Component{
  render() {
    return(
     <Navbar collapseOnSelect="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
                />
              </Navbar.Brand >

              <Nav className="mr-auto">
                <Nav.Link href="/">Кинотеатр</Nav.Link>
              </Nav>
        </Container>
     </Navbar>
    );
  }

}
export default Header;
