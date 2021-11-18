import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.scss'],
})
export class LoginUsuariosComponent implements OnInit {
  user: Usuario;
  constructor(private service: UsuarioService, private rota: Router, private _snackBar: MatSnackBar) {}

  async fazlogin() {
    let login;
    try {
      login = await this.service.fazLogin(this.user);
      this.service.usuario =login.data;
      console.log(this.service.usuario)
      await this.rota.navigateByUrl('HubInicial');
    } catch {
      this._snackBar.open('Email/senha incorretos', 'X', { duration: 3000 });
    }
  }

  ngOnInit(): void {
    this.user = new Usuario();
  }
}
