import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() displayMode: 'modal' | 'page' = 'page';

  readonly profilePhotoUrl = 'assets/yamin.jpg';
  readonly emailAddress = 'yaminmoulay12@gmail.com'
  readonly linkedinUrl = 'https://www.linkedin.com/in/yamin-moulay-0269051bb/'
  readonly githubUrl = 'https://github.com/Astora59'

  constructor(public modalService: ContactService) {}

  get isModal(): boolean {
    return this.displayMode === 'modal'
  }

  close(): void {
    this.modalService.close()
  }
}
