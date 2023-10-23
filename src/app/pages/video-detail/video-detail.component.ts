import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/Services/route.service';
import { VideoService } from 'src/app/Services/video.service';
import { VideoReaction } from 'src/app/models/video-reaction.model';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
})
export class VideoDetailComponent {
  @ViewChild('videoPlayer')
  private videoPlayer!: ElementRef;

  videoId!: string;
  // video: Video = { author: {} } as Video;
  video!: Video;

  videoReactions!: VideoReaction[];

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    // Update service state: this is video details page
    this.routeService.setIsVideoDetailPage(true);

    // Get the videoId from the route parameters
    this.route.params.subscribe((params) => {
      this.videoId = params['videoId'];

      // Fetch video details using the videoId
      this.videoService.getVideoDetails(this.videoId).subscribe({
        next: (video: Video) => {
          this.video = video;
          console.log(video);
        },
        error: (err) => console.log(err),
      });
    });

    this.fetchVideoReactions();
  }

  // Fetch List of the video Reactions
  fetchVideoReactions() {
    this.videoService.getVideoReactions(this.videoId).subscribe({
      next: (reactions: VideoReaction[]) => {
        // Sort the reactions by postedDate in descending order (newest first)
        this.videoReactions = reactions.sort((a, b) => {
          const dateA = a.createdDate || a.postedDate;
          const dateB = b.createdDate || b.postedDate;

          // Convert the date strings to Date objects and explicitly cast to number
          return +new Date(dateB) - +new Date(dateA);
        });

        console.log(this.videoReactions);
      },
      // Handle Error
      error: (err) => console.log(err),
    });
  }

  // Create Star Reaction
  createStarReaction(): void {
    const video = this.videoPlayer.nativeElement;
    // Get the current time of the video
    const currentTime = video.currentTime;

    // Make a POST request to save the Snapshot reaction
    this.videoService.addStarReaction(this.videoId, currentTime).subscribe({
      next: () => {
        this.fetchVideoReactions();
      },
      error: (err) => console.log(err),
    });
  }

  // Create Snapshot Reaction
  createSnapshotReaction(): void {
    const video = this.videoPlayer.nativeElement;
    // Get the current time of the video
    const currentTime = video.currentTime;
    // Get frame Image as a Base64
    const imageBase64Data = this.CaptureFrameImage(video);

    if (imageBase64Data) {
      // Make a POST request to save the Snapshot reaction
      this.videoService
        .addSnapshotReaction(this.videoId, currentTime, imageBase64Data)
        .subscribe({
          next: () => {
            this.fetchVideoReactions();
          },
          error: (err) => console.log(err),
        });
    } else {
      // Handle Error
      console.error('Failed to capture screenshot');
    }
  }

  // Capture Frame Image as a Bse64
  CaptureFrameImage(video: any) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions to match the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame of the video onto the canvas
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data as base64
    const imageBase64Data = canvas.toDataURL('image/png');

    return imageBase64Data;
  }

  // Play the video on the reaction selected timeframe
  GoToFrame(timeframe: number) {
    const video = this.videoPlayer.nativeElement;
    video.pause();
    video.currentTime = timeframe;

    // Smooth scroll to the top (video)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  // toggleVideo(event: any) {
  //   this.videoplayer.nativeElement.play();
  // }
}
