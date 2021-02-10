import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../user'
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users: User[] = [
    {
      userID: '1',
      firstName: 'dhrubo',
      lastName: 'talukder',
      age: 35,
      email: 'dhrubo@dh.com',
      phone: 6468752316,
    },
    {
      userID: '2',
      firstName: 'rasel',
      lastName: 'mohd',
      age: 36,
      email: 'rasel@dh.com',
      phone: 6468752316,
    },
    {
      userID: '3',
      firstName: 'nasir',
      lastName: 'mohd',
      age: 36,
      email: 'nasir@dh.com',
      phone: 6468752316,
    },
    {
      userID: '4',
      firstName: 'islam',
      lastName: 'mohd',
      age: 36,
      email: 'islam@dh.com',
      phone: 6468752316,
    },
    {
      userID: '5',
      firstName: 'mithu',
      lastName: 'mohdd',
      age: 36,
      email: 'mithu@dh.com',
      phone: 6468752316,
    },
    {
      userID: '2',
      firstName: 'rasel',
      lastName: 'mohd',
      age: 36,
      email: 'rasel@dh.com',
      phone: 6468752316,
    },
    {
      userID: '2',
      firstName: 'rasel',
      lastName: 'mohd',
      age: 36,
      email: 'rasel@dh.com',
      phone: 6468752316,
    },
    {
      userID: '2',
      firstName: 'rasel',
      lastName: 'mohd',
      age: 36,
      email: 'rasel@dh.com',
      phone: 6468752316,
    },
  ];
  userList!: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'email', 'phone'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) { 

  }

  ngAfterViewInit() {
    this.userList.paginator = this.paginator;
  }

  ngOnInit(){
    this.userService.getUsers().subscribe(
      list => {
        let array = list.map(item => {
          return {...item}
        })
        this.userList = new MatTableDataSource(this.users)
        this.userList.paginator = this.paginator
      }
    )
  }

}
