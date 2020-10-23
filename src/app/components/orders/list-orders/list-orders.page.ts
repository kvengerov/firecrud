import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.page.html',
  styleUrls: ['./list-orders.page.scss'],
})
export class ListOrdersPage implements OnInit {
  public orders = [];

  constructor(
    private afs: AngularFirestore,
    private ordersService: OrdersService,
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  private getOrders() {
    this.ordersService
      .getOrders()
      .subscribe((res) => {
        this.orders = res;
      });
  }

  public async markCompleted(data) {
    await this.ordersService.updateOrder(data);
  }

  public async deleteOrder(data) {
    await this.ordersService.deleteOrder(data);
  }

}
