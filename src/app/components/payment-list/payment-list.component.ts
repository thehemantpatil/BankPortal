import { Component, Input, OnInit } from '@angular/core';
import { FetchPaymentDetailService } from 'src/app/services/fetch-payment-detail.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css'],
})
export class PaymentListComponent implements OnInit {
  paymentList: any[] = [];
  @Input() searchValue: any = '';

  constructor(private fetchPaymentDetails: FetchPaymentDetailService) {}

  ngOnInit(): void {
    let paymentListObject = this.fetchPaymentDetails.getPaymentDetails();
    paymentListObject.subscribe((response: any) => {
      console.log(response);
      this.paymentList = response;
    });
  }

  searchPayment() {
    if (this.searchValue == '') {
      this.ngOnInit();
    } else {
      this.paymentList = this.paymentList.filter((payment: any) => {
        console.log(payment);
        if (
          payment.category
            .toLocaleLowerCase()
            .match(this.searchValue.toLocaleLowerCase())
        ) {
          return payment;
        }
      });
    }
  }
}
