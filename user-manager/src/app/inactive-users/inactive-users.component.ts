import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  setUserToActive(id: number) {
    this.userService.setUserToActive(id);
  }

}
