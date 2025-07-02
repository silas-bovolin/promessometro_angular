import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { UsuarioService } from '../../services/usuario/usuario.service';
import { LoginRequest } from '../../dtos/requests/login_request.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PermissaoService } from '../../services/permissao/permissao.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  message: String | null = null;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router, 
    private permissaoService: PermissaoService
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required]],
    })
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      this.informarErroForms();
      return;
    }
    const request: LoginRequest = this.loginForm.value;
    const response = this.usuarioService.login(request);
    response.subscribe({
      next: value => {
        this.processarLogin(value.Token);
      },
      error: value => {
        this.message = value.name;
      }
    });

    // if (request.email.toLowerCase()== 'adm@gmail.com' && request.senha == 'admin') {
    //   this.processarLogin('X');
    // }
    // else {
    //   this.message = 'E-mail ou senha incorretos';
    // }
  }

  informarErroForms() {
    if (this.loginForm.get('email')?.errors) {
      this.message = 'O e-mail deve ser informado e deve ser um e-mail válido';
      return;
    }

    if (this.loginForm.get('senha')?.errors) {
      this.message = 'A senha deve ser informada';
      return;
    }
  }

  processarLogin(token: string) {
    this.permissaoService.salvaToken(token);
    this.router.navigate(['/promessometro']);
  }
}
