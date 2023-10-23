import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-camera-icon',
  templateUrl: './camera-icon.svg',
})
export class CameraIconComponent {
  @Input() fill!: string;
}
