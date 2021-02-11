import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  form = this.fb.group({
    $key: [null],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [null, [Validators.required, Validators.minLength(10)]],
    address: this.fb.group({
      addressField1: ['', Validators.required],
      addressField2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    }),
  });

  getUsers() {
    return this.db.collection('users').valueChanges(({idField: 'userID'}));
  }

  getUserAddress(userID: string) {
   const address = this.db.collection('users').doc(`${userID}`).collection('address').valueChanges({ idField: 'docId' })

   address.subscribe(console.log)
  }

}
