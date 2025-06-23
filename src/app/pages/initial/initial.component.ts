import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-initial',
  imports: [CommonModule, LoginComponent, CadastroComponent],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss'
})
export class InitialComponent {
  mostrarLogin: boolean = true;

  exibeLogin() {
    this.mostrarLogin = true;
  }

  exibeCadastro() {
    this.mostrarLogin = false;
  }
}
