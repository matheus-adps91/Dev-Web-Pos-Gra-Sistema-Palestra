import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  formularioCadastro = new FormGroup({
    email: new FormControl('', Validators.required),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  onSubmit() {}
}
