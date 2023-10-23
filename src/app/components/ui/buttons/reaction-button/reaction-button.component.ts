import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reaction-button',
  templateUrl: './reaction-button.component.html',
})
export class ReactionButtonComponent {
  @Input()
  label!: string;
  @Input()
  icon!: string;
}
