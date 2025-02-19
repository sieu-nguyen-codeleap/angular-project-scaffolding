import { Component } from '@angular/core';
import { SearchFormComponent } from '../partials/search-form/search-form.component';

@Component({
  selector: 'app-header',
  imports: [SearchFormComponent],
  template: `
    <header class="bg-white dark:bg-[#252728] p-4">
      <app-search-form />
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
