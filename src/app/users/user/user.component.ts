import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  employmentForm!: FormArray
  
  constructor(public service: UserService) { 
  }

  ngOnInit(): void {
    console.log(this.service.form)
    this.employmentForm = this.service.form.get('employmentHistory') as FormArray
  }

  addEmploymentHistoryForm(): void {
    this.employmentForm.push(this.service.createEmploymentHistoryForm())
  }

  onSubmit(){
    if(this.service.form.valid) {
      this.service.createUser(this.service.form.value)
    }
  }


}
