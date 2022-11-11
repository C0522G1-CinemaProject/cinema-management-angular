import {Times} from "./Times";
import {Movie} from "./Movie";
import {Room} from "./Room";

export interface ShowTimes {
  id?: number,
  dateProjection?: string,
  times?: Times,
  movie?: Movie,
  room?: Room
}
