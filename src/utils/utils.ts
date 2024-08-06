import { CardObject } from "../App";

export const isCardObject = (data: unknown): data is CardObject => {
    return typeof data === 'object' && data !== null && 'uuid' in data && 'content' in data;
}