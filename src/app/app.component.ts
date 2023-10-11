import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'video-box-app';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Initial fetch of user data when the app starts
    this.userService.fetchCurrentUser();
  }
}
