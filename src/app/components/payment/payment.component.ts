import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentsService } from 'src/app/servicepay/payments.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private paymentService: PaymentsService) { }

  register(paymentForm: NgForm){
    this.paymentService.addpayment(paymentForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        paymentForm.reset();
        alert("Payment Accepted, Please Press Ok to View Your Receipt.");
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
