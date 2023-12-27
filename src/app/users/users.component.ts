import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatToolbarModule,MatCardModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers(1).subscribe((response: any) => {
      this.users = response.data;
    });
  }
}

