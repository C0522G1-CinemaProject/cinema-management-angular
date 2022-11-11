import {MovieType} from "./MovieType";

export interface Movie {
  id?: number,
  name?: string,
  image?: string,
  startDay?: string,
  endDay?: string,
  director?: string,
  filmTime?: string,
  trailer?: string,
  content?: string,
  filmStudio?: string,
  actor?: string,
  version?: string
  movieType?: MovieType
}
