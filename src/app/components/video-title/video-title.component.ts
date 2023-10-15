import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
})
export class VideoTitleComponent {
  @Input() videoTitle!: string;
  @Input() authorId!: string;

  // Add these properties for editing
  editedVideoTitle!: string;
  isEditing: boolean = false;
  isVideoAuthor: boolean = false;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // Check if current user is video author
    this.userService.currentUser$.subscribe((user) => {
      this.isVideoAuthor = user.id === this.authorId;
    });
  }

  // Enable editing mode
  editVideoTitle(): void {
    this.isEditing = true;
  }
}
