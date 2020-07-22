import React from "react";

import {Container,Nav,Row,Tab,Col} from 'react-bootstrap'


import Name from "./cinema_name.js"
import FilmTabs from "./FilmTabs.js"

import Accordions from "./cinema_seats"
import Schedule from "./schedule"


class Tabs extends React.Component{
  render() {
    return(
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first"  >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Films</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Data
                  

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                  Seats

                  </Nav.Link>

                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fouth">Name</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                <FilmTabs/>


                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Schedule/>

                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Accordions/>


                </Tab.Pane>
                <Tab.Pane eventKey="fouth">
                   <Name/>

                </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }

}
export default Tabs;
