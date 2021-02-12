import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroupDirective } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(public service: UserService) {}

  ngOnInit(): void {
    console.log(this.service.form);
  }

  get employmentHistory() {
    return this.service.form.get('employmentHistory') as FormArray;
  }

  addEmploymentHistoryForm(): void {
    this.employmentHistory.push(this.service.createEmploymentHistoryForm());
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
