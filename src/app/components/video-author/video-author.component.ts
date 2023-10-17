import { Component, Input } from '@angular/core';
import { Author } from 'src/app/models/author.model';

@Component({
  selector: 'app-video-author',
  templateUrl: './video-author.component.html',
})
export class VideoAuthorComponent {
  @Input() author!: Author;
}
