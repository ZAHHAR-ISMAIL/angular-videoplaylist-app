import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { VideoService } from 'src/app/Services/video.service';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
})
export class VideoTitleComponent {
  @Input() videoId!: string;
  @Input() videoTitle!: string;
  @Input() authorId!: string;

  // Add these properties for editing
  editedVideoTitle!: string;
  isEditable: boolean = false;
  isVideoAuthor: boolean = false;

  constructor(
    private userService: UserService,
    private videoService: VideoService
  ) {}
  ngOnInit(): void {
    // Check if current user is video author
    this.userService.currentUser$.subscribe((user) => {
      if (user.id === this.authorId) {
        this.isVideoAuthor = true;
        this.editedVideoTitle = this.videoTitle;
      }
    });
  }

  onInputChange() {
    // Check if Input not empty and different than current Title
    if (this.editedVideoTitle && this.editedVideoTitle != this.videoTitle)
      this.isEditable = true;
    else this.isEditable = false;
  }

  // Enable editing mode
  saveVideoTitle(): void {
    // Make an API request to update the video title
    this.videoService
      .updateVideoTitle(this.videoId, this.editedVideoTitle)
      .subscribe({
        next: () => {
          // Update the original video title and exit editing mode
          this.videoTitle = this.editedVideoTitle;
          this.isEditable = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
