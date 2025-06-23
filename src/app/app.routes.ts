import { Routes } from '@angular/router';
import { PromessometroComponent } from './pages/promessometro/promessometro.component';
import { SigilometroComponent } from './pages/sigilometro/sigilometro.component';
import { InitialComponent } from './pages/initial/initial.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '', component: InitialComponent,
    },
    {
        path: 'promessometro', component: PromessometroComponent, canActivate: [authGuard]
    },
    {
        path: 'sigilometro', component: SigilometroComponent, canActivate: [authGuard]
    },
    { path: "**", redirectTo: "" },
];
