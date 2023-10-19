import { Component } from '@angular/core';
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

    this.videoService.getVideoReactions(this.videoId).subscribe({
      next: (reactions: VideoReaction[]) => {
        this.videoReactions = reactions;
        console.log(this.videoReactions);
      },
      error: (err) => console.log(err),
    });
  }

  // toggleVideo(event: any) {
  //   this.videoplayer.nativeElement.play();
  // }
}
