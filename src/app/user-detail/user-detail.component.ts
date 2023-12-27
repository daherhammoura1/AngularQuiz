import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatIconModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  constructor(private router: Router, /* other dependencies */) { }

  goBack() {
    this.router.navigate(['/users']);
    
  ;
    throw new Error('Method not implemented.');
  }

  user: any;
}
