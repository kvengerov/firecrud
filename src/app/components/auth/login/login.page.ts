import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthService,
    private alertService: AlertService,
  ) {}

  ngOnInit() {}

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.signUp(this.form.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/create-order', { replaceUrl: true });
    }, async err => {
      await loading.dismiss();
      const alert = await this.alertService.createAlertController('Sign up failed');
      await alert.present();
    });
  }

  async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.signIn(this.form.value).then(user => {
      loading.dismiss();
      this.router.navigateByUrl('/create-order', { replaceUrl: true });
    }, async err => {
      await loading.dismiss();
      const alert = await this.alertService.createAlertController('Sign in failed');
      await alert.present();
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
