import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl; // API endpoint
  private currentUserSubject = new BehaviorSubject<User>(new User()); // Initialize with an empty User object

  constructor(private http: HttpClient) {}

  // Getter for the current user's data
  get currentUser$(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  // Fetch the current user's data from the API and cache it
  fetchCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/self`).pipe(
      tap({
        next: (user) => {
          // Update currentUser with the received user data
          this.currentUserSubject.next(user);
        },
        error: (err) => {
          // Handle error
          console.error('Error fetching current user:', err);
        },
      })
    );
  }
}
