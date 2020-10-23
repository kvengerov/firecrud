import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOrdersPage } from 'src/app/components/orders/list-orders/list-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ListOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOrdersPageRoutingModule {}
