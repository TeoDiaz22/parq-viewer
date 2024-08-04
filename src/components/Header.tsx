import { Container, Row } from 'react-bootstrap'
import ParQLogo from '../assets/parq-logo.svg'

export const Header = () => {
    return (
        <Container>
            <Row className='align-items-center m-5'>
                <img src={ParQLogo} alt='Logo de ParQ' height={150}/>
            </Row>
        </Container>
    )
}
