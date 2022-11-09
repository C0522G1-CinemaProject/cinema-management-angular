import {User} from "./User";
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
  userName?: User
  customerType?: CustomerType
}
