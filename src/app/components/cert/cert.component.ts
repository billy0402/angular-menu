import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../store/order.service';

@Component({
  selector: 'app-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.scss']
})
export class CertComponent implements OnInit {

  constructor(private orderStore: OrderService) { }

  ngOnInit() {
  }

  get orderTotal() {
    return this.orderStore.getOrderList.reduce((a, b) => a + b['total'], 0);
  }

}
