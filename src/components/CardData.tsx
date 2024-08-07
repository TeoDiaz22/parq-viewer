import { Row, Table } from "react-bootstrap"
import { CardObject } from "../App"

type CardDataProps = {
    data: CardObject,
}

export const CardData = ({ data }: CardDataProps) => {

    return (
        <Row>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <td className='fw-bold'>UID</td>
                        <td>{data.uid}</td>
                    </tr>
                    <tr>
                        <td className='fw-bold'>Nombre de Usuario</td>
                        <td>{data.userName}</td>
                    </tr>
                </tbody>
            </Table>
        </Row>
    )
}
