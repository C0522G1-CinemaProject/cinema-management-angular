import {Room} from "./Room";
import {Seat} from "./Seat";
import {SeatType} from "./SeatType";

export interface SeatRoom {
  id?: number,
  room?: Room,
  seat?: Seat,
  seatType?: SeatType;
}
