import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  userList!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'email',
    'phone',
  ];
  searchTerm = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngAfterViewInit() {
    this.userList ? (this.userList.paginator = this.paginator) : this.userList;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe({
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

  performSearch() {
    this.userList.filter = this.searchTerm.trim().toLocaleLowerCase();
  }

  getUserDetails(row: User) {
    let userID: string = row.userID!
    this.userService.getUserAddress(userID)
    this.userService.getUserEmploymentHistory(userID)
  }

}
