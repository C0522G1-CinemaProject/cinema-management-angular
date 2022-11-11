import {Customer} from "./Customer";
import {SeatDetail} from "./seat-detail";

export interface Ticket {
  id?: number,
  statusTicket?: number,
  customer?: Customer,
  seatDetail?: SeatDetail,
  ticketBookingTime?: string;
}
