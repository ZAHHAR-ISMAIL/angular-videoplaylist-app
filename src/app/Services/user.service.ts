import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl; // API endpoint
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  // Getter for the current user's data
  get currentUser$(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  // Fetch the current user's data from the API and cache it
  fetchCurrentUser(): void {
    this.http.get<User>(`${this.apiUrl}/users/self`).subscribe({
      next: (user: User) => this.currentUserSubject.next(user),
      error: (e) => console.error(e),
    });
  }
}
