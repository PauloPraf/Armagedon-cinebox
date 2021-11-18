import { Usuario } from './models/usuario.model';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  atualizar(usuario: Usuario) {
    return axios.put('http://localhost:21262/usuarios', usuario)
  }
  private urlCadastro = 'http://localhost:21262/cadastro';
  private urlLogin = 'http://localhost:21262/login';
usuario: Usuario;
  constructor() {}

  salvaUsuario(usuario: Usuario) {
    return axios.post(this.urlCadastro, usuario);
  }

  fazLogin(usuario: Usuario) {
    this.usuario = usuario;
    return axios.post(this.urlLogin, usuario);
  }
}
