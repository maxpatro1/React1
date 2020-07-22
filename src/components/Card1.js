import React from "react";
import {Button,Container, Card,CardDeck} from 'react-bootstrap'


class Card1 extends React.Component{
  render() {
    return(
      <Container>
       <CardDeck>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/360"/>
              <Card.Body>
                <Card.Title> Темный рыцарь </Card.Title>
                <Card.Text>
                  Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта
                  Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма
                  от преступности.
                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/7aaafe9c-f4bf-44b5-aeea-3f06ec829a30/x1000"/>
              <Card.Body>
                <Card.Title> Kingsman: Секретная служба  </Card.Title>
                <Card.Text>
                Эггси — молодой парень, который прошел службу в морской пехоте и имеет очень высокий уровень интеллекта.
                 Он мог бы добиться многого, но выбрал другой путь и стал мелким преступником

                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/afab999b-c6bb-4fac-a951-03f72fd2b8cf/x1000"/>
              <Card.Body>
                <Card.Title> Мстители </Card.Title>
                <Card.Text>
                  Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля на грани порабощения,
                  и только лучшие из лучших могут спасти человечество.
                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
       </CardDeck>
      </Container>
    );
  }

}
export default Card1;
