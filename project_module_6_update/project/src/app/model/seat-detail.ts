import {ShowTimes} from "./show-times";
import {SeatRoom} from "./seat-room";

export interface SeatDetail {
  id?: number,
  showTimes?: ShowTimes,
  seatRoom?: SeatRoom,
  statusSeat?: number
}
