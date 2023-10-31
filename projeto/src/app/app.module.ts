import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnsFormComponent } from './components/btns-form/btns-form.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form.component';
import { PainelComponent } from './components/painel/painel.component';
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from './components/aluno-painel/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnsFormComponent,
    HeaderComponent,
    LoginFormComponent,
    CadastroFormComponent,
    PainelComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
