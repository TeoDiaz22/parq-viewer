import { Button, Col, Container, Row } from 'react-bootstrap'
import { CardData } from './components/CardData'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket';
import { ParkingSlots } from './components/ParkingSlots';
import { WS_SERVER } from './config/config';

export type CardObject = {
  uuid: string,
  content: string,
}


function App() {

  const [cardsReaded, setCardsReaded] = useState<CardObject[]>([]);
  const [isParkingOccupied, setIsParkingOccupied] = useState(false);

  const socket = useWebSocket(WS_SERVER, {
    onMessage: ({ data }) => {
      console.log('Message:', data);
      if (data.includes('Puesto')) {
        data.includes('ocupado') ? setIsParkingOccupied(true) : setIsParkingOccupied(false);
      };
      // setCardsReaded(prevCards => [...prevCards, JSON.parse(event.data)]);
    }
  });

  useEffect(() => {

    if (socket.lastMessage) {
      console.log('Card readed:', socket.lastMessage);
    }
  }, [socket.lastMessage]);


  // useEffect(() => {
  //   socket.on('card readed', (card: CardObject) => {
  //     console.log('Card readed:', card);
  //     setCardsReaded(prevCards => [...prevCards, card]);
  //   });
  // }, []);

  const handleClear = () => setCardsReaded([]);

  return (
    <Container className='text-center align-content-center w-50'>
      <Button className='mb-2' onClick={handleClear}><i className='bi bi-trash mx-1'></i>Limpiar</Button>
      {/* {cardsReaded.map(card => <CardData key={card.uuid} data={card} />)} */}
      <Row>
        <Col>
          <CardData data={{ uuid: '123', content: 'Test' }} />
          <CardData data={{ uuid: '123', content: 'Test' }} />
          <CardData data={{ uuid: '123', content: 'Test' }} />
        </Col>
        <Col>
          <ParkingSlots isOccupied={isParkingOccupied} />
        </Col>
      </Row>
    </Container>

  )
}

export default App;