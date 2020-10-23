import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';

import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
  public form = this.fb.group({
    name: ['', Validators.required],
    amount: ['', Validators.required],
    // customer: ['', Validators.required],
    client: ['', Validators.required],
    complete: [false],
  });
  public myOrders = [];

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private authService: AuthService,
    private ordersService: OrdersService,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  private getOrders() {
    this.myOrders = [];
    this.authService.userEmail.subscribe(email => {
      this.form.patchValue({ client: email });
      this.afs.collection('orders')
        .get()
        .subscribe(ss => {
          ss.docs.forEach((doc) => {
            const data = doc.data();
            if (data.client === email) {
              this.myOrders.push(data);
            }
          });
        });
    });
  }

  public async createOrder() {
    this.ordersService
      .createOrder(this.form.value)
      .then((res) => {
        this.form.reset();
        this.getOrders();
        this.createAlert('Order added');
      }, async err => {
        await this.createAlert('Order failed');
      });
  }

  async createAlert(message) {
    const alert = await this.alertService.createAlertController(message);
    await alert.present();
  }
}
