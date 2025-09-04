import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { CadastroComponent } from '../../components/cadastro/cadastro.component';

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
