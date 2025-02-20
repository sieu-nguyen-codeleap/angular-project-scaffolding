import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/molecules/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main class="bg-[#F2F4F7] dark:bg-[#1C1C1D] h-screen">
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'scaffolding';
}
