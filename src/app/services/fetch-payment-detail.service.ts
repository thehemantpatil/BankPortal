import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchPaymentDetailService {
  constructor(private http: HttpClient) {}

  getPaymentDetails() {
    let url = 'https://api.jsonbin.io/b/61a8650462ed886f91587a91';
    return this.http.get(url);
  }
}
