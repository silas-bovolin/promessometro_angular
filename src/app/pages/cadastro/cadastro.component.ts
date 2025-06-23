import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.cadastroForm = this.fb.group({
      nome: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["", Validators.required],
      senha: ["", Validators.required],
      confirmarSenha: ["", Validators.required]
    });
  }
}
