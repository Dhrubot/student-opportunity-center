import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  form = this.fb.group({
    $key: [null],
    firstName: [''],
    lastName: [''],
    age: [null],
    email: [''],
    phone: [null],
    address: this.fb.group({
      addressField1: [''],
      addressField2: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  getUsers() {
    return this.db.collection('users').valueChanges(({idField: 'userID'}));
    // users.subscribe(console.log);
    // const address = this.db.collectionGroup('address').valueChanges();
    // address.subscribe(console.log);
    // const employmentHistory = this.db
    //   .collectionGroup('employmentHistory')
    //   .valueChanges();
    // // let hello = this.db
    // //   .collection('users')
    // //   .get()
    // //   .subscribe((querySnapshot) => {
    // //     querySnapshot.forEach((doc) => {
    // //       // doc.data() is never undefined for query doc snapshots
    // //       console.log(doc.id, ' => ', doc.data());
    // //     });
    // //   });
    // const userId = '71ZhsAUWVdm78D4YdDyC'
    // const userEmploymentHistory = this.db.collection('employmentHistory', ref => ref.where('user', '==', userId))
    // .valueChanges()
    // userEmploymentHistory.subscribe(console.log)
  }


}
