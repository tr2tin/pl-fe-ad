import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  customers;
  constructor(private userService: UserService) {
    this.customers =  userService.getCustomers();
   }

  ngOnInit() {
  }

}
