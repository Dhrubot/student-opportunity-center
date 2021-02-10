import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from '../user'
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList!: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'email', 'phone'];

  constructor(private userService: UserService) { 

  }

  ngOnInit(){
    this.userService.getUsers().subscribe(
      list => {
        let array = list.map(item => {
          return {...item}
        })
        this.userList = new MatTableDataSource(array)
      }
    )
  }

}
