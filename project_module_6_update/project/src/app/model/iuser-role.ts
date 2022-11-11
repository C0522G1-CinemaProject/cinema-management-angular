import {IUser} from "./IUser";

export interface IUserRole {
  userRoleId: number;
  user: IUser;

  role: IRole;
}
