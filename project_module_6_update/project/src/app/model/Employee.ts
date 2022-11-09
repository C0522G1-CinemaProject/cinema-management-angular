import {User} from "./User";

export interface Employee {
  id?: number,
  name?: string,
  gender?: number,
  email?: string,
  address?: string,
  phoneNumber?: string,
  userName?: User,
  idCard?: string,
  dayOfBirth?: string,
  image?: string
}
