import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.svg',
})
export class StarIconComponent {
  @Input() fill!: string;
}
