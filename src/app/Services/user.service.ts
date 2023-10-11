import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api'; // API endpoint
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  // Getter for the current user's data
  get currentUser$(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  // fetch the current user's data from the API and cache it
  fetchCurrentUser(): void {
    this.http.get<any>(`${this.apiUrl}/users/self`).subscribe(
      (user) => {
        this.currentUserSubject.next(user);
      },
      (error) => {
        // Handle error if API request fails
        console.error('Error fetching current user:', error);
      }
    );
  }
}
