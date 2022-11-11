import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Promotion} from "../../model/Promotion";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.api_url;

  }
  createPromotion(promotion:any): Observable<Promotion> {
    return this.httpClient.post<Promotion>(this.apiUrl + 'save', promotion);
  }

  getById(id: number): Observable<Promotion> {
    return this.httpClient.get<Promotion>(this.apiUrl + id);
  }

  editPromotion(id: number, promotion: Promotion): Observable<Promotion> {
    return this.httpClient.put<Promotion>(this.apiUrl + 'edit/' + id, promotion);
  }
}
