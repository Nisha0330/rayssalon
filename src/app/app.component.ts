import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import your standalone components
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    GalleryComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

