import {Customer} from "./Customer";

export interface Ticket {
  id?: number,
  statusTicket?: string,
  customer?: Customer,
  seatDetail?: string
}
