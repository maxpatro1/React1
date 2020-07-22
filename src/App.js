import React from "react";
import {Container} from 'react-bootstrap'
import Header from "./components/header";
import Tabs from "./components/tabs"




class App extends React.Component{
  render() {
    return(
      <Container >

          <Header/>
          <Tabs/>


      </Container>
    );
  }

}
export default App;
