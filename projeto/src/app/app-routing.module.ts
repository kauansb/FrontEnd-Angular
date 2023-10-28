import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';

const routes: Routes = [
  { path: 'tela-login', component: LoginFormComponent },
  { path: 'tela-cadastro', component: CadastroFormComponent },
  { path: '', redirectTo: '/tela-login', pathMatch: 'full' }, // Redireciona a raiz para a tela de login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
