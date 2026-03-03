import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  items = [
    { type: 'photo', src: '/assets/images/client.png' },
    { type: 'photo', src: '/assets/images/hair.png' },
    { type: 'photo', src: '/assets/images/review1.jpeg' },
    { type: 'photo', src: '/assets/images/review2.jpeg' }
  ];

  currentIndex = 0;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }
}
