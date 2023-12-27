import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
