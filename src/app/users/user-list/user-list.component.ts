import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user/user-details/user-details.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit,OnDestroy, AfterViewInit {
  userList!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'email',
    'phone',
  ];
  searchTerm = '';
  userSubscription!: Subscription

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.userList ? (this.userList.paginator = this.paginator) : this.userList;
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers().subscribe({
      next: users => {
        this.userList = new MatTableDataSource(users);
        this.userList.paginator = this.paginator;
        console.log(users)
      },
    });
  }

  clearSearchField(): void {
    this.searchTerm = '';
    this.performSearch();
  }

  performSearch(): void {
    this.userList.filter = this.searchTerm.trim().toLocaleLowerCase();
  }

  getUserDetails(row: User) {
    let userID: string = row.userID!
    let address = this.userService.getUserAddress(userID)
    let employmentHistory = this.userService.getUserEmploymentHistory(userID)

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '70%';
    dialogConfig.data = {
      personalInfo: row,
      addressInfo: address,
      employmentHistory: employmentHistory
    };

    this.dialog.open(UserDetailsComponent, dialogConfig)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}
