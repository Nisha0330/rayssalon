import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  openWhatsApp() {
    window.open("https://wa.me/919884886005?text=Hello%20Ray's%20Studio!", "_blank");
  }
}
