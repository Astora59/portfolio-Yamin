import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-source-reference',
  templateUrl: './source-reference.component.html',
  styleUrls: ['./source-reference.component.css']
})
export class SourceReferenceComponent {
  @Input() href = '';
  @Input() title = 'Source :';
  @Input() displayText?: string;
  @Input() meta?: string;

  get linkText(): string {
    return this.displayText || this.href;
  }
}
