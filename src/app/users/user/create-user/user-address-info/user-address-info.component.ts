import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-address-info',
  templateUrl: './user-address-info.component.html',
  styleUrls: ['./user-address-info.component.css']
})
export class UserAddressInfoComponent implements OnInit {

  constructor(public formService: UserService) { }

  ngOnInit(): void {
  }

}
