import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

type ParkingSlotsProps = {
    isOccupied: boolean;
};

const PARKING_OCCUPIED = 'El parqueadero esta ocupado';
const PARKING_FREE = 'El parqueadero esta libre';

export const ParkingSlots = ({ isOccupied }: ParkingSlotsProps) => {

    const [parkingState, setParkingState] = useState(isOccupied);

    useEffect(() => {
        setParkingState(isOccupied);
    }, [isOccupied]);

    return (
        <Button className="sticky-top" size="lg" variant={parkingState ? "danger" : "success"}>
            <i className="bi bi-car-front mx-2"></i>
            {parkingState ? PARKING_OCCUPIED : PARKING_FREE}
        </Button>
    )
}
