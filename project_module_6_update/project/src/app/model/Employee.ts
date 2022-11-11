import {IUser} from "./IUser";

export interface Employee {
  id?: number,
  name?: string,
  gender?: number,
  email?: string,
  address?: string,
  phoneNumber?: string,
  userName?: IUser,
  idCard?: string,
  dayOfBirth?: string,
  image?: string
}
