import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public userEmail = new BehaviorSubject('');

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
  }

  public async signUp({ email, password }) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);

    const uid = credential.user.uid;

    return this.afs
      .doc(`users/${ uid }`)
      .set({ uid, email: credential.user.email });
  }

  public async signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public getUsers() {
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }

  public logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
