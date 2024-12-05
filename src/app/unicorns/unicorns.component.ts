import { Component } from '@angular/core';
import { UnicornColorComponent } from '../unicorn-color/unicorn-color.component';
import { UnicornColor } from '../unicorncolor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unicorns',
  imports: [CommonModule, UnicornColorComponent],
  template: `
    <section>
      <form>
        <input class='search-input' type="text" placeholder="Filter by color" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
     <section class="results">
      <app-unicorn-color *ngFor="let unicornColor of unicornColors" [unicornColor]="unicornColor"></app-unicorn-color>
    </section>
  `,
  styleUrls: ['./unicorns.component.css'],
})
export class UnicornsComponent {
  title = 'unicorns';
  readonly baseUrl = '/assets/images';
  
    unicornColors: UnicornColor[] = [
      {
        id: 1,
        name: 'Pinkie Sprinkle',
        color: 'pink',
        photo: `${this.baseUrl}/pinkieSprinkle.png`,
        favoriteThing: 'Cupcakes',
      },
      {
        id: 2,
        name: 'Ruby Heart',
        color: 'red',
        photo: `${this.baseUrl}/rubyHeart.png`,
        favoriteThing: 'Heart Balloons',
      },
      {
        id: 3,
        name: 'Tangerine Dream',
        color: 'orange',
        photo: `${this.baseUrl}/tangerineDream.png`,
        favoriteThing: 'Orange Slices',
      },
      {
        id: 4,
        name: 'Sunny Bloom',
        color: 'yellow',
        photo: `${this.baseUrl}/sunnyBloom.png`,
        favoriteThing: 'Sunflowers',
      },
      {
        id: 5,
        name: 'Clover Luck',
        color: 'green',
        photo: `${this.baseUrl}/cloverLuck.png`,
        favoriteThing: 'Clovers',
      },
      {
        id: 6,
        name: 'Bubblesky',
        color: 'blue',
        photo: `${this.baseUrl}/bubblesky.png`,
        favoriteThing: 'Blowing Bubbles',
      },
      {
        id: 7,
        name: 'Starry Serenade',
        color: 'indigo',
        photo: `${this.baseUrl}/starlight.png`,
        favoriteThing: 'Playing Harp of Starlight',
      },
      {
        id: 8,
        name: 'Lavender Dream',
        color: 'violet',
        photo: `${this.baseUrl}/lavenderDream.png`,
        favoriteThing: 'Lavender Flowers',
      },
      {
        id: 9,
        name: 'Fairy Floss',
        color: 'pink and blue',
        photo: `${this.baseUrl}/fairyFloss.png`,
        favoriteThing: 'Rainbow Farts',
      },
    ]
}

