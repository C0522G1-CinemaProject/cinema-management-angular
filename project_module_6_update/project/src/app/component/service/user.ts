import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../../model/IUser";

export class User {
  private baseURL = 'http://localhost:8080/api/public/user';

  constructor(
    private http: HttpClient
  ) {
  }

  findAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseURL);
  }
}
