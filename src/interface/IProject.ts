import { IBoard } from "./IBoard";
import { IUser } from "./IUser";

export interface IProject {
    id?: number
    name: string;
    description: string;
    project_members: IUser[];
    boards:IBoard[];
}

export const emptyProject = {
    name: "",
    description: "",
    project_members: [],
    boards:[],
};