import { Container } from 'react-bootstrap'
import { CardData } from './components/CardData'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket';
import { isCardObject } from './utils/utils';

export type CardObject = {
  uuid: string,
  content: string,
}

const urlServer = '';

function App() {

  const [cardsReaded, setCardsReaded] = useState<CardObject[]>([]);

  const { lastJsonMessage, readyState } = useWebSocket(urlServer);

  useEffect(() => {
    if (lastJsonMessage && isCardObject(lastJsonMessage)) {
      setCardsReaded(prevCards => [...prevCards, lastJsonMessage]);
    }
  }, [lastJsonMessage]);

  return (
    <Container className='text-center align-content-center w-50'>
      {cardsReaded.map(card => <CardData key={card.uuid} data={card} />)}
      {/* <CardData data={{ uuid: 'cb0c1447-ed43-4296-b213-e156322687aa', content: 'Contenido del campo' }} />
      <CardData data={{ uuid: 'cb0c1447-ed43-4296-b213-e15632dasaaa', content: 'Contenido del campo' }} /> */}
    </Container>
  )
}

export default App;