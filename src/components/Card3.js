import React from "react";
import {Button,Container, Card,CardDeck} from 'react-bootstrap'


class Card3 extends React.Component{
  render() {
    return(
      <Container>
       <CardDeck>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a4bcd57c-d63d-4d2c-944d-78bbf78d3a09/x1000"/>
              <Card.Body>
                <Card.Title> Всегда говори «ДА» </Card.Title>
                <Card.Text>
                  Депрессивный главный герой всегда и всем говорил «нет» — например, друзьям, если они зовут куда-то.
                  Но в один прекрасный день он заключает соглашение, по которому всегда должен отвечать «Да» на любое предложение...
                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/82b8c6a1-7b41-401e-8a24-03ac3707346f/360"/>
              <Card.Body>
                <Card.Title> Брюс Всемогущий  </Card.Title>
                <Card.Text>
                 Пессимист Брюс Нолан — популярный ведущий теленовостей. Его ничего не интересует: ни девушка Грейс,
                  ни собственные репортажи. Но однажды Брюса увольняют. Разочарованный герой бросает вызов Богу и неожиданно получает ответ Всевышнего.

                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/af924598-65b8-47c5-8297-75a661a7c335/360"/>
              <Card.Body>
                <Card.Title> Маска </Card.Title>
                <Card.Text>
                  Скромный, застенчивый служащий банка закомплексован настолько, что чувствует себя неуверенно с красивыми девушками.
                  Волею судьбы к нему попадает волшебная маска, и Стенли Ипкис приобретает способность превращаться в неуязвимое мультяшное
                  существо из забавных комиксов.
                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
       </CardDeck>
      </Container>
    );
  }

}
export default Card3;
