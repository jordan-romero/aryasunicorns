import {Component} from '@angular/core';
import {UnicornsComponent} from './unicorns/unicorns.component' 

@Component({
  selector: 'app-root',
  imports: [UnicornsComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true" />
        <h1 class='brand-header'>Arya's Unicorns</h1>
      </header>
      <section class="content">
        <app-unicorns></app-unicorns>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aryasUnicorns';
}
