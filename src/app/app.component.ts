
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatToolbarModule,FormsModule,MatInputModule,MatCardModule,MatIconModule,MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchId!: string;
  isLoading = false;
  userService: any;

  loadUserData(id: string) {
    this.isLoading = true;
    this.userService.getUserById(id).subscribe(
      (      data: any) => {
        this.isLoading = false;
        // handle data
      },
      (      error: any) => {
        this.isLoading = false;
        // handle error
      }
    );
  }

  constructor(@Inject(Router) private router: Router) {}

  searchUser() {
    if (this.searchId) {
      this.router.navigate(['/user', this.searchId]);
    }
  }
 resetSearch() {
  window.location.reload();
}

}