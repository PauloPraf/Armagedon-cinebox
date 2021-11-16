import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginUsuariosComponent } from './login-usuarios/login-usuarios.component';
import { HubInicialComponent } from './hub-inicial/hub-inicial.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent, CadastroUsuarioComponent, LoginUsuariosComponent, HubInicialComponent],
  imports: [MatSnackBarModule, BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
