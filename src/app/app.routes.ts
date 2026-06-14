import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cadastro', component: Cadastro },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'home' }
];
