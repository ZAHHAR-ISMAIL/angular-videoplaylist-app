import { Component, Input } from '@angular/core';
import { VideoPreview } from 'src/app/models/video-preview.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent {
  @Input() video!: VideoPreview;
}
