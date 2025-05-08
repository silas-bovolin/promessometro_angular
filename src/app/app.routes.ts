import { Routes } from '@angular/router';
import { PromessometroComponent } from './pages/promessometro/promessometro.component';
import { SigilometroComponent } from './pages/sigilometro/sigilometro.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '', component: PromessometroComponent,
    },
    {
        path: 'sigilometro', component: SigilometroComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    { path: "**", redirectTo: "" },
];
