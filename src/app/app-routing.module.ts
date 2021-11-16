import { HubInicialComponent } from './hub-inicial/hub-inicial.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuariosComponent } from './login-usuarios/login-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'login', component: LoginUsuariosComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'HubInicial', component: HubInicialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
