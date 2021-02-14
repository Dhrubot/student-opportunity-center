import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateUserComponent } from '../users/user/create-user/create-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Student Oppotunity Center';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickCreateUser(){
    const dialogConfig = new MatDialogConfig() 
    dialogConfig.width = '70%'
    dialogConfig.height = '70%'
    this.dialog.open(CreateUserComponent, dialogConfig)
  }

}
