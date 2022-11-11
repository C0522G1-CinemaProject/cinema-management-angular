import {Customer} from "./Customer";

export interface SavingPoint{
  id?: number,
  point?: string,
  dayBooking?: string,
  customer?: Customer
}
