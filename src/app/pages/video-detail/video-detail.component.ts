import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/Services/video.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
})
export class VideoDetailComponent {
  // @ViewChild('videoPlayer')
  // videoplayer!: ElementRef;

  videoId!: string;
  videoUrl!: string;
  videoTitle!: string;
  videoDescription!: string;
  authorId!: string;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    // Get the videoId from the route parameters
    this.route.params.subscribe((params) => {
      this.videoId = params['videoId'];

      // Fetch video details using the videoId
      this.videoService.getVideoDetails(this.videoId).subscribe((data: any) => {
        this.videoUrl = data.url;
        this.videoTitle = data.title;
        this.videoDescription = data.description;
        this.authorId = data.author.id;
      });
    });
  }

  // toggleVideo(event: any) {
  //   this.videoplayer.nativeElement.play();
  // }
}
