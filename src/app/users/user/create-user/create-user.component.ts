import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroupDirective } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(public service: UserService) {}

  ngOnInit(): void {
    console.log(this.service.form);
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.createUser(this.service.form.value);
      this.clearForm();
    }
  }

  clearForm() {
    setTimeout(() => this.formGroupDirective.resetForm(), 0);
  }

  onClear() {
    this.clearForm();
  }

}
