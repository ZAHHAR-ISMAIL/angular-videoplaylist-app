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
        },
        error: (err) => console.log(err),
      });
    });

    this.fetchVideoReactions();
  }

  fetchVideoReactions() {
    this.videoService.getVideoReactions(this.videoId).subscribe({
      next: (reactions: VideoReaction[]) => {
        this.videoReactions = reactions;
        console.log(this.videoReactions);
      },
      error: (err) => console.log(err),
    });
  }

  createSnapshotReaction(): void {
    const video = this.videoPlayer.nativeElement;

    // Get the current time of the video
    const currentTime = video.currentTime;

    // Create a canvas element to draw the screenshot on
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame of the video on the canvas
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas content to base64 image data (PNG format)
      const screenshotData = canvas.toDataURL('image/png');

      // Now, screenshotDataUrl contains the screenshot of the video as base64 image data.
      console.log('Screenshot as base64:', screenshotData);

      this.videoService
        .addSnapshotReaction(this.videoId, currentTime, screenshotData)
        .subscribe({
          next: () => {
            this.fetchVideoReactions();
          },
          error: (err) => console.log(err),
        });
    } else {
      console.error('Failed to capture screenshot: getContext returned null.');
    }

    // // Get the video player element (you may need to use ViewChild to reference the video player element)
    // const videoPlayer = document.getElementById(
    //   'video-element'
    // ) as HTMLVideoElement; /* Get a reference to your video player element */

    // // Capture the current time of the video
    // const currentTime = videoPlayer.currentTime;

    // // Capture the base64 image data (you need to define the logic for this)
    // const imageBase64Data =
    //   this.CaptureFrameImage(); /* Capture the image data from the video player */

    // // Create the Snapshot reaction data
    // const snapshotReactionData = {
    //   videoId,
    //   type: 'snapshot',
    //   timeframe: currentTime,
    //   dataUri: imageBase64Data,
    // };

    // // Make a POST request to save the Snapshot reaction
    // this.videoService
    //   .addReaction(videoId, snapshotReactionData)
    //   .subscribe(() => {
    //     // After successfully adding the reaction, refresh the video details
    //     this.fetchVideoReactions();
    //   });
  }

  CaptureFrameImage() {
    // Get the video element by its ID
    const video = document.getElementById('video-element') as HTMLVideoElement;

    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set the canvas dimensions to match the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame of the video onto the canvas
    //ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data as base64
    const imageBase64Data = canvas.toDataURL('image/png');

    return imageBase64Data;
  }

  // Play the video on the reaction selected timeframe
  GoToFrame(reaction: VideoReaction) {
    console.log(reaction.timeframe);
  }

  // toggleVideo(event: any) {
  //   this.videoplayer.nativeElement.play();
  // }
}
