import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  currentUser!: User; // add model

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Subscribe to the current user's data
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }
}
