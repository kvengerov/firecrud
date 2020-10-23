import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOrderPageRoutingModule } from 'src/app/components/orders/create-order/create-order-routing.module';

import { CreateOrderPage } from 'src/app/components/orders/create-order/create-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOrderPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateOrderPage]
})
export class CreateOrderPageModule {}
