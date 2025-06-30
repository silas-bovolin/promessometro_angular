import { Component } from '@angular/core';

import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarComponent, CommonModule],
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = 'promessometro_angular';
  showNavbar: boolean = false;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        this.showNavbar = !ev.url.endsWith('/');
      });

  }
}
