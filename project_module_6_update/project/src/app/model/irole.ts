import {IUserRole} from "./iuser-role";

export interface IRole {
  roleId: number;
  name: string;

  accountRoleList: IUserRole[];
}
