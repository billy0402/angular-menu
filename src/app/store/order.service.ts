import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderList: object[] = [];

  constructor() { }

  get getOrderList() {
    return this.orderList;
  }

  setOrderList(order: any) {
    this.orderList.push(order);
  }

}
