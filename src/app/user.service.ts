import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://reqres.in/api/users';
  private usersCache = new Map<number, any>();

  constructor(private http: HttpClient) { }
  getUsers(page: number) {
    return this.http.get(`${this.baseUrl}?page=${page}`);
  }

  
  getUserById(id: number) {
    if (this.usersCache.has(id)) {
      return of(this.usersCache.get(id)); // Return cached data as an Observable
    } else {
      return this.http.get(`${this.baseUrl}/${id}`).pipe(
        tap(response => this.usersCache.set(id, response)) // Cache the response
      );
    }
  }
}
