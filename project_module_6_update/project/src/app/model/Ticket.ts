import {Customer} from "./Customer";

export interface Ticket {
  id?: number,
  statusTicket?: number,
  customer?: Customer,
  seatDetail?: string,
  ticketBookingTime?: string;
  room?: string;
}
