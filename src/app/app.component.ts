import { Component } from '@angular/core';

import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { filter, Observable } from 'rxjs';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavbarComponent, CommonModule, LoadingComponent],
  templateUrl: `./app.component.html`,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = 'promessometro_angular';
  showNavbar: boolean = false;
  loading$: Observable<boolean>;

  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((ev: NavigationEnd) => {
        this.showNavbar = !ev.url.endsWith('/');
      });
    this.loading$ = this.loadingService.loading$;
  }
}
