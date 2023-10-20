import { Component, Input } from '@angular/core';
import { VideoReaction } from 'src/app/models/video-reaction.model';

@Component({
  selector: 'app-video-reaction',
  templateUrl: './video-reaction.component.html',
})
export class VideoReactionComponent {
  @Input() reaction!: VideoReaction;

  goTimeframe(reaction: VideoReaction) {
    console.log(reaction.timeframe);
  }
}
