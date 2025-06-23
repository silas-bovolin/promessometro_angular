import { Component } from '@angular/core';

import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = 'promessometro_angular';
}
