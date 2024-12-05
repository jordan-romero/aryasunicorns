import { Component, Input } from '@angular/core';
import { UnicornColor } from '../unicorncolor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unicorn-color',
  imports: [ CommonModule],
  template: `
   <section class="listing">
      <img
        class="listing-photo"
        [src]="unicornColor.photo"
        alt="Exterior photo of {{ unicornColor.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ unicornColor.name }}</h2>
      <p class="listing-location">{{ unicornColor.favoriteThing }}</p>
    </section>
  `,
  styleUrls: ['./unicorn-color.component.css'],
})
export class UnicornColorComponent {
  @Input() unicornColor!: UnicornColor;
}
