import { Injectable } from '@angular/core';
import axios from 'axios';
import { Filme } from './models/filme.model';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  private url = 'http://localhost:21262/filmes';

  constructor() {}

  adicionaFilme(filme: Filme) {
    return axios.post(this.url, filme);
  }

  listarfilmes() {
    return axios.get(this.url);
  }

  excluirfilmes(id: string) {
    console.log(id);
    return axios.delete(this.url, { data: { id: id } });
  }

  salvarFilme(novofilme: Filme) {
    return axios.put(this.url, novofilme);
  }
}
