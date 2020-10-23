import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOrdersPageRoutingModule } from 'src/app/components/orders/list-orders/list-orders-routing.module';

import { ListOrdersPage } from 'src/app/components/orders/list-orders/list-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOrdersPageRoutingModule
  ],
  declarations: [ListOrdersPage]
})
export class ListOrdersPageModule {}
