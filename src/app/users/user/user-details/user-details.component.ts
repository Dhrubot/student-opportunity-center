import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/shared/user.service';
import { Address, EmploymentHistory, User } from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userPersonalInfo!: User
  address: any
  employmentHistory!: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: {personalInfo: User}, private userService: UserService) { }

  ngOnInit(): void {
    this.userPersonalInfo = this.data.personalInfo
    this.getAddress()
    this.getEmploymentHistory()
  }

  getAddress() {
    this.userService.getUserAddress(this.userPersonalInfo.userID!).subscribe({
      next: address => {
        this.address = address
        console.log(this.address)
      }
    })
  }

  getEmploymentHistory() {
    this.userService.getUserEmploymentHistory(this.userPersonalInfo.userID!)
    .subscribe({
      next: employmentHistory => {
        this.employmentHistory = employmentHistory
        console.log(this.employmentHistory)
      }
    })
  }

}
