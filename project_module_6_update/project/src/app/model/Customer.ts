import {IUser} from "./IUser";
import {CustomerType} from "./CustomerType";

export interface Customer {
  id?: number,
  name?: string,
  dayOfBirth?: string,
  gender?: number,
  idCard?: string,
  email?: string,
  address?: string,
  phoneNumber?: string,
  userName?: IUser
  customerType?: CustomerType
}
