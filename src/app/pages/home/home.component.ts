import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/Services/route.service';
import { VideoService } from 'src/app/Services/video.service';
import { VideoPreview } from 'src/app/models/video-preview.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  videos: VideoPreview[] = []; // videos (preview) data

  constructor(
    private videoService: VideoService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    // Update service state: this is not video details page
    this.routeService.setIsVideoDetailPage(false);

    // Fetch the list of videos from your service
    this.videoService.getVideos().subscribe({
      next: (data: VideoPreview[]) => {
        this.videos = data;
      },
      // Handle error
      error: (err) => console.log(err),
    });
  }
}
