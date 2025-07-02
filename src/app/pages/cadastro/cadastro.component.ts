import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CadastroRequest } from '../../dtos/requests/cadastro_request.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { LoginRequest } from '../../dtos/requests/login_request.model';
import { PermissaoService } from '../../services/permissao/permissao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    CommonModule
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  message: String | null = null;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router, 
    private permissaoService: PermissaoService
  ) {
    this.cadastroForm = this.fb.group({
      nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["55", Validators.required],
      senha: ["", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]],
      confirmarSenha: ["", Validators.required],
      aceitouOsTermos : [false]
    });
  }

  onSubmit() : void {
    if (!this.formEhValido()) {
      return;
    }
    
    const request: CadastroRequest = this.cadastroForm.value;
    const response = this.usuarioService.cadastro(request);
    response.subscribe({
      next: value => {
        this.login(request);
      },
      error: value => {
        this.message = value.name;
      }
    })
    
  }

  formEhValido() : boolean {
    if (this.cadastroForm.get('nome')?.errors) {
      this.message = 'O nome deve ser informado';
      return false;
    }
    
    if (this.cadastroForm.get('email')?.errors) {
      this.message = 'O e-mail deve ser informado e deve ser um e-mail válido';
      return false;
    }

    if (this.cadastroForm.get('telefone')?.errors) {
      this.message = 'O celular deve ser informado';
      return false;
    }

    if (this.cadastroForm.get('senha')?.errors?.['required']) {
      this.message = 'A senha deve ser informada';
      return false;
    }

    if (this.cadastroForm.get('confirmarSenha')?.errors) {
      this.message = 'A senha de confirmação deve ser informada';
      return false;
    }

    if (this.cadastroForm.get('senha')?.value != this.cadastroForm.get('confirmarSenha')?.value) {
      this.message = 'A senha e a confirmação de senha não são iguais';
      return false;
    }

    if (this.cadastroForm.get('senha')?.errors?.['pattern']) {
      this.message = 'A senha deve conter ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial';
      return false;
    }

    if (!this.cadastroForm.get('aceitouOsTermos')?.value){
      this.message = 'É necessário aceitar os termos para prosseguir';
      return false;
    }

    this.message = '';
    return true;
  }

  login(request: CadastroRequest) {
    const loginRequest: LoginRequest = request;
    const loginResponse = this.usuarioService.login(loginRequest)
    loginResponse.subscribe({
      next: value => {
        this.permissaoService.salvaToken(value.Token);
        this.router.navigate(['/promessometro']);
      },
      error: value => {
        this.message = value.name;
      }
    });
  }
}
