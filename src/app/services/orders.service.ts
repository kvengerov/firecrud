import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

const ORDERS = 'orders';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  constructor(
    private afs: AngularFirestore,
  ) {}

  public createOrder(data) {
    console.log(data);
    return this.afs
        .collection(ORDERS)
        .add(data);
  }

  public getOrders() {
    return this.afs
      .collection(ORDERS)
      .snapshotChanges();
  }

  public updateOrder(data) {
    return this.afs
      .collection(ORDERS)
      .doc(data.payload.doc.id)
      .set({ complete: true }, { merge: true });
  }

  public deleteOrder(data) {
    return this.afs
      .collection(ORDERS)
      .doc(data.payload.doc.id)
      .delete();
  }
}
