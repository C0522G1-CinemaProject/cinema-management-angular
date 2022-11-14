import {IUser} from "./IUser";
import {IRole} from "./irole";

export interface IUserRole {
  userRoleId: number;
  user: IUser;
  role: IRole;
}
