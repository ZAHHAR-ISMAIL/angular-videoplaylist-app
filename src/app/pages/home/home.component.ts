import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/Services/route.service';
import { VideoService } from 'src/app/Services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  videos: any[] = []; // video data

  constructor(
    private videoService: VideoService,
    private routeService: RouteService
  ) {}

  ngOnInit(): void {
    // Update service state this is not video details page
    this.routeService.setIsVideoDetailPage(false);

    // Fetch the list of videos from your service
    this.videoService.getVideos().subscribe((data: any) => {
      this.videos = data;
      console.log(this.videos);
    });
  }
}
