export interface IRole {
    id: number;
    name: string;
    description: string;
  }
  
  export interface IRolesResponse {
    roles: IRole[];
  }