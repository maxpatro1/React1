import React from "react";
import {Button,Container, Card,CardDeck} from 'react-bootstrap'


class Card2 extends React.Component{
  render() {
    return(
      <Container>
       <CardDeck>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/9fb2de51-f6d2-4408-9f93-1d5de198bace/360"/>
              <Card.Body>
                <Card.Title> Звонок </Card.Title>
                <Card.Text>
                  Телефонный звонок раздаётся после просмотра некой загадочной видеокассеты.
                  Жертве даётся ровно семь дней, а после следует неминуемая смерть.
                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/dd86fcf8-fd55-4020-901a-202df623214c/x1000"/>
              <Card.Body>
                <Card.Title> Сайлент Хилл  </Card.Title>
                <Card.Text>
                Доктора не могут найти лекарство от таинственного заболевания Шэрон, но её мать
                Роуз отказывается отдавать ребёнка в психиатрическую лечебницу.

                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/0c10db94-d416-4a9a-8757-b7d13719f425/x1000"/>
              <Card.Body>
                <Card.Title> Зеркала </Card.Title>
                <Card.Text>
                Бывший нью-йоркский полицейский устраивается на работу ночным сторожем выгоревших руин крупного универмага.
                 Обходя обугленные развалины, он начинает замечать что-то зловещее в декоративных зеркалах, украшающих стены:
                 в огромных мерцающих стёклах отражается что-то жуткое.
                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
       </CardDeck>
      </Container>
    );
  }

}
export default Card2;
