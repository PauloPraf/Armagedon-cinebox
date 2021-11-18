import { UsuarioService } from './../usuario.service';
import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  usuario: Usuario;
  confirmaEmail = '';
  comfirmaSenha = '';

  constructor(private router: Router, private service: UsuarioService, private _snackBar: MatSnackBar) {}

  salvarUser() {
    if (
      this.checaEmail(this.usuario.email) &&
      this.usuario.email == this.confirmaEmail &&
      this.usuario.senha == this.comfirmaSenha
    ) {
      this.service.salvaUsuario(this.usuario);
      this.router.navigateByUrl('login');
    } else {
      this._snackBar.open('Email/senha incorretos', 'X', { duration: 1000 });
    }
  }
  checaEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }
}
