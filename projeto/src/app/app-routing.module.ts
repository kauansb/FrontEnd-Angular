import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { PainelComponent } from './components/painel/painel.component';
import { AvaliacaoAlunoComponent } from './components/avaliacao-aluno/avaliacao-aluno.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  { path: 'painel', component: PainelComponent },         //canActivate: [AdminGuard]
  { path: 'avaliacao', component: AvaliacaoAlunoComponent}, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },  //Redireciona a raiz para a tela de login
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
