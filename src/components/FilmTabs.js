import React from "react";
import {Container,Nav,Row,Tab} from 'react-bootstrap'
import Card1 from "./Card1.js"
import Card2 from "./Card2.js"
import Card3 from "./Card3.js"
import Card4 from "./Card4.js"
class FilmTabs extends React.Component{
  render() {
    return(
      <Container>
        <Tab.Container id="top-tabs-example" defaultActiveKey="first"  >
        <Row>
          <Nav variant="tabs" className="flex-Row mt-2" >
          <Nav.Item>
            <Nav.Link eventKey="first">All</Nav.Link>
          </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="second">Horror</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Comedy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fouth">Drama</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Action</Nav.Link>
            </Nav.Item>
          </Nav>
          </Row>
          <Row>
          <Tab.Content>
          <Tab.Pane eventKey="first">
              <Card1/>
              <Card2/>
              <Card3/>
              <Card4/>

          </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                  <Card1/>

              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Card2/>

              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Card3/>

              </Tab.Pane>
              <Tab.Pane eventKey="fouth">
                <Card4/>

              </Tab.Pane>

            </Tab.Content>
          </Row>
        </Tab.Container >
      </Container>

    );
  }

}
export default FilmTabs;
