import { ILabel } from "./ILabel";

export interface IBoard {
    id?: number
    name: string;
    description: string;
    labels: ILabel[],
}

export const emptyBoard = {
    name: "",
    description: "",
    labels: []
};