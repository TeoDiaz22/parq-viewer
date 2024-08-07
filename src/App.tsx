import { Button, Col, Container, Row } from 'react-bootstrap'
import { CardData } from './components/CardData'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket';
import { ParkingSlots } from './components/ParkingSlots';
import { WS_SERVER } from './config/config';

export type CardObject = {
  uid: string,
  userName: string,
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
      if (data.includes('uid')) {
        setCardsReaded(prevCards => [...prevCards, JSON.parse(data)]);
      }
    }
  });

  // useEffect(() => {

  //   if (socket.lastMessage) {
  //     console.log('Card readed:', socket.lastMessage);
  //   }
  // }, [socket.lastMessage]);

  const handleClear = () => setCardsReaded([]);

  return (
    <Container className='text-center align-content-center w-50'>
      <Button className='mb-2' onClick={handleClear}><i className='bi bi-trash mx-1'></i>Limpiar</Button>
      <Row>
        <Col>
          <CardData data={{ uid: '123', userName: 'Mateo Perez' }} />
          {cardsReaded.map(card => <CardData key={card.uid} data={card} />)}
        </Col>
        <Col>
          <ParkingSlots isOccupied={isParkingOccupied} />
        </Col>
      </Row>
    </Container>

  )
}

export default App;