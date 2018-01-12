import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  setUserToInactive(id: number) {
    this.userService.setUserToInactive(id);
  }

}
