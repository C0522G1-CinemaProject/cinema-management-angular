import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../../model/Ticket";

@Injectable({
  providedIn: 'root'
})
export class ConfirmBookingTicketService {

  private API_URL = 'http://localhost:8080/api/ticket/list-ticket/';

  constructor(private httpClient: HttpClient) { }

  getTicketById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.API_URL + id);
  }

}
