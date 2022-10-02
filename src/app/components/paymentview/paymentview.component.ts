import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/payment';
import { PaymentsService } from 'src/app/servicepay/payments.service';

@Component({
  selector: 'app-paymentview',
  templateUrl: './paymentview.component.html',
  styleUrls: ['./paymentview.component.css']
})
export class PaymentviewComponent implements OnInit {
  id!: number;
//   pay: Payment[] = new Payment();
  // pay!: Payment[];
  // pay:Payment= new Payment();
  // pay: Payment[] = [];
  pay: Payment = new Payment();



  constructor(private paymentsService: PaymentsService) { }

  ngOnInit(): void {
    // console.log(this.getAllPayment());
    
    // this.getAllPayment();
  }

  // private getAllPayment(){
  //   this.paymentsService.getAllPayment(this.pay).subscribe((data: any[]){
  //     this.pay = data;
  //   });
  // }

  //  getAllPayment(){
  //   this.paymentsService.getAllPayment().subscribe(data =>{
  //     this.pay = data;
  //   });
  // }

  // getAllPayment(){
  //   this.paymentsService.getAllPayment.subscribe((response: Payment[])=>{
  //     this.pay=response;
  //   })
  }

