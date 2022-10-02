import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {


  constructor(private http: HttpClient) { }
  API = 'http://localhost:8080/payment';

  public addpayment(data: any) {
    return this.http.post(this.API , data); 
  }

  public getAllPayment(): Observable<Payment[]>{
    // console.log(this.http.get<any[]>(`${this.API}`));
    return this.http.get<Payment[]>(`${this.API}`);
  }

  // public getAllPayment(){
  //   return this.http.get(`${this.API}`);
  // }
}
