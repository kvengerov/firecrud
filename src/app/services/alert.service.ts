import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  public async createAlertController(header) {
    return await this.alertController.create({
      header,
      buttons: ['OK'],
    });
  }
}
