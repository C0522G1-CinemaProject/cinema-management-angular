import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../model/Ticket";

@Injectable({
  providedIn: 'root'
})
export class PaymentBookingTicketService {

  private API_URL = 'http://localhost:8080/api/ticket/update-ticket';

  constructor(private httpClient: HttpClient) { }

  updateStatusTicketById(id: number): Observable<void> {
    // @ts-ignore
    return this.httpClient.put<void>(this.API_URL + "/" + id);
  }
}
