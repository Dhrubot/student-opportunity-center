import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  
  constructor(public service: UserService) { 
  }

  ngOnInit(): void {
    console.log(this.service.form)
  }

  onSubmit(){
    if(this.service.form.valid) {
      this.service.createUser(this.service.form.value)
    }
  }


}
