import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch Current User
    this.userService.fetchCurrentUser().subscribe({
      next: () => {},
      error: (err) => {
        // Handle errors
        console.log(err);
      },
    });
  }
}
