import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/Services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  videos: any[] = []; // Replace with your video data type

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    // Fetch the list of videos from your service
    this.videoService.getVideos().subscribe((data: any) => {
      this.videos = data;
      console.log(this.videos);
    });
  }
}
