import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, Address, EmploymentHistory } from '../users/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fb: FormBuilder, private db: AngularFirestore) {}
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      null,
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^\d*\.?\d*$/),
      ],
    ],
    skills: this.fb.array([]),
    address: this.fb.group({
      addressField1: ['', Validators.required],
      addressField2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern(/^\d*\.?\d*$/),
        ],
      ],
    }),
    employmentHistory: this.fb.array([this.createEmploymentHistoryForm()]),
  });

  createEmploymentHistoryForm() {
    return this.fb.group({
      companyName: [''],
      companyAddress: [''],
      companyPhoneNumber: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^\d*\.?\d*$/),
        ],
      ],
      jobTitle: [''],
      startDate: [null],
      endDate: [null],
      isCurrentJob: [false],
      reasonForLeaving: [''],
    });
  }

  getUsers() {
    return this.db.collection('users').valueChanges({ idField: 'userID' });
  }

  getUserAddress(userID: string) {
    const address = this.db
      .collection('users')
      .doc(`${userID}`)
      .collection('address')
      .valueChanges();

    return address
  }

  getUserEmploymentHistory(userID: string) {
    const employmentHistory = this.db
    .collection('users')
    .doc(`${userID}`)
    .collection('employmentHistory')
    .valueChanges();

    return employmentHistory
  }

  

  createUser(user: User) {
    const newUserDocRef = this.db.firestore.collection('users').doc();
    let writeBatch = this.db.firestore.batch();
    // return this.db.collection('users').add(user)
    const address: Address = user.address
    const employmentHistory: EmploymentHistory = user.employmentHistory
    writeBatch.set(newUserDocRef, {
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      phone: user.phone,
      skills: user.skills,
    }),
      writeBatch.set(newUserDocRef.collection('address').doc(), {
        address,
      });
    writeBatch.set(newUserDocRef.collection('employmentHistory').doc(), {
      employmentHistory,
    });
    return writeBatch.commit();
  }
}
