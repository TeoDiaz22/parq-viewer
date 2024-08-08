import { format } from "@formkit/tempo";
import { CardObject } from "../App";

export const isCardObject = (data: unknown): data is CardObject => {
    return typeof data === 'object' && data !== null && 'uuid' in data && 'content' in data;
}

export const parseCardObject = (dataString: string): CardObject => {
    const userData = dataString.split(',');
    return {
        uid: userData[0],
        userName: userData[1],
        enterTime: format(new Date(), { date: 'full', time: 'short' }),
    };
}