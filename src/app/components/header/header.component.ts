import { Component } from '@angular/core';
import { NavListComponent } from '../partials/nav-list/nav-list.component';

@Component({
  selector: 'app-header',
  imports: [NavListComponent],
  template: `
    <header class="bg-white dark:bg-[#252728] p-4">
      <app-nav-list />
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
