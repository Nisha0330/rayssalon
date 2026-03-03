import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatGridListModule, NgFor],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Premium Hair Extensions',
      description: 'Permanent, natural-looking extensions trusted by celebrities.',
  
    },
    {
      title: 'Nail Art & Care',
      description: 'Trendy designs and premium nail care for a flawless look.',
    },
    {
      title: 'Skin Care Treatments',
      description: 'Luxury facials and rejuvenating skin therapies.',
    }
  ];
}
