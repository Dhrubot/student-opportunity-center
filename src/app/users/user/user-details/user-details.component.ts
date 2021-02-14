import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  userPersonalInfo!: User;
  address: any;
  employmentHistory!: any;
  addressSubscription!: Subscription;
  employmentSubscription!: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { personalInfo: User },
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userPersonalInfo = this.data.personalInfo;
    this.getAddress();
    this.getEmploymentHistory();
  }

  getAddress(): void {
    this.addressSubscription = this.userService
      .getUserAddress(this.userPersonalInfo.userID!)
      .subscribe({
        next: (address) => {
          this.address = address;
        },
      });
  }

  getEmploymentHistory(): void {
    this.employmentSubscription = this.userService
      .getUserEmploymentHistory(this.userPersonalInfo.userID!)
      .subscribe({
        next: (employmentHistory) => {
          this.employmentHistory = employmentHistory;
        },
      });
  }

  ngOnDestroy(): void {
    this.addressSubscription.unsubscribe();
    this.employmentSubscription.unsubscribe();
  }
}
