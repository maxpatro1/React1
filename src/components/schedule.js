import React from "react";
import {Container,Table} from "react-bootstrap";



class Schedule extends React.Component{
  render() {
    return(
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Время</th>
              <th>Фильм</th>
              <th>Количество билетов</th>
              <th>Цена</th>
           </tr>
        </thead>
        <tbody>
          <tr>
            <td>10.45</td>
            <td>Темный рыцарь</td>
            <td>35</td>
            <td>300 рублей</td>
          </tr>
          <tr>
          <td>12.45</td>
          <td>Темный рыцарь</td>
          <td>20</td>
          <td>300 рублей</td>
        </tr>
        <tr>
          <td>14.45</td>
          <td>Темный рыцарь</td>
          <td>34</td>
          <td>300 рублей</td>
        </tr>
        <tr>
          <td>16.45</td>
          <td>Темный рыцарь</td>
          <td>22</td>
          <td>300 рублей</td>
        </tr>
        <tr>
          <td>18.45</td>
          <td>Темный рыцарь</td>
          <td>10</td>
          <td>300 рублей</td>
        </tr>
        <tr>
          <td>20.45</td>
          <td>Темный рыцарь</td>
          <td>23</td>
          <td>500 рублей</td>
        </tr>
        </tbody>
        </Table>
      </Container>
    );
  }
}
export default Schedule;
