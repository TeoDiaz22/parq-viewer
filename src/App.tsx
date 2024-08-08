import { Button, Col, Container, Row } from 'react-bootstrap'
import { CardData } from './components/CardData'
import { useEffect, useRef, useState } from 'react'
import useWebSocket from 'react-use-websocket';
import { ParkingSlots } from './components/ParkingSlots';
import { WS_SERVER } from './config/config';
import { parseCardObject } from './utils/utils';

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
      }else{
        const cardData = parseCardObject(data);
        setCardsReaded(prevCards => [...prevCards, cardData]);
      }
    }
  });

  const handleClear = () => setCardsReaded([]);

  return (
    <Container className='text-center align-content-center w-50'>
      <Button className='mb-2 sticky-top' size='lg' onClick={handleClear}><i className='bi bi-trash mx-1'></i>Limpiar</Button>
      <ParkingSlots isOccupied={isParkingOccupied} />
      <Row>
        <Col>
          {cardsReaded.map(card => <CardData key={card.uid} data={card} />)}
        </Col>
      </Row>
    </Container>

  )
}

export default App;