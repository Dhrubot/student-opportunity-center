import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private fb: FormBuilder) { }

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
      zip: ['']
    }),
  })
}
