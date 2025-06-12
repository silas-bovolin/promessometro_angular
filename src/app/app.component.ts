import { Component } from '@angular/core';

import { PromessometroComponent } from './pages/promessometro/promessometro.component';

@Component({
  selector: 'app-root',
  imports: [PromessometroComponent],
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = 'promessometro_angular';
}
