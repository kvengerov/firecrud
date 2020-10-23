import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOrderPage } from 'src/app/components/orders/create-order/create-order.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateOrderPageRoutingModule {}
