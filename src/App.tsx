import { Container } from 'react-bootstrap'
import { CardData } from './components/CardData'

export type CardObject = {
  uuid: string,
  content: string,
}

function App() {


  return (
    <Container className='text-center align-content-center w-50'>
      <CardData data={{ uuid: 'cb0c1447-ed43-4296-b213-e156322687aa', content: 'Contenido del campo' }} />
      <CardData data={{ uuid: 'cb0c1447-ed43-4296-b213-e15632dasaaa', content: 'Contenido del campo' }} />
    </Container>
  )
}

export default App;