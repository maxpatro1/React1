import React from "react";
import {Button,Container, Card,CardDeck} from 'react-bootstrap'




class Card4 extends React.Component{
  render() {
    return(
      <Container>
       <CardDeck>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/82f8a2dc-a439-4832-9f0f-dc599e6e78d2/360"/>
              <Card.Body>
                <Card.Title> Хатико: Самый верный друг </Card.Title>
                <Card.Text>
                  Профессор и Хатико стали верными друзьями. Каждый день пес провожал и встречал Профессора на вокзале.
                   И даже потеря хозяина не остановила пса в его надежде, что друг вернется.
                </Card.Text>
              </Card.Body>
              <Button className="btn btn-primary" data-toggle="button" aria-pressed="True" autocomplete="on"> >Выбрать</Button>

          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/4c78b2e3-ffed-4985-bbc2-642952c92f5e/360"/>
              <Card.Body>
                <Card.Title> 1+1 </Card.Title>
                <Card.Text>
                Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека,
                который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы.

                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/360"/>
              <Card.Body>
                <Card.Title> Брат </Card.Title>
                <Card.Text>
                  Демобилизованный из армии, Данила Багров вернулся в родной городок.
                  Но скучная жизнь российской провинции не устраивала его, и он решился податься в Петербург,
                  где, по слухам, уже несколько лет процветает его старший брат.
                </Card.Text>
              </Card.Body>
              <Button variant ="primary"> Выбрать</Button>
          </Card>
       </CardDeck>
      </Container>
    );
  }

}
export default Card4;
