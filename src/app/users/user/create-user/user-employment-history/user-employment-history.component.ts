import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-employment-history',
  templateUrl: './user-employment-history.component.html',
  styleUrls: ['./user-employment-history.component.css']
})
export class UserEmploymentHistoryComponent implements OnInit {

  constructor(public service: UserService) {}

  ngOnInit(): void {
  }

  get employmentHistory() {
    return this.service.form.get('employmentHistory') as FormArray;
  }

  addEmploymentHistoryForm(): void {
    this.employmentHistory.push(this.service.createEmploymentHistoryForm());
  }

  deleteEmploymentHistoryForm(index: number): void {
    this.employmentHistory.removeAt(index)
  }


}
