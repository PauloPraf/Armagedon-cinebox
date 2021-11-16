import { FilmesService } from './../filmes.service';
import { Filme } from './../models/filme.model';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-hub-inicial',
  templateUrl: './hub-inicial.component.html',
  styleUrls: ['./hub-inicial.component.scss'],
})
export class HubInicialComponent implements OnInit {
  filmes: any[];
  novofilme = new Filme();

  constructor(private servicefilme: FilmesService) {}

  async salvarFilme() {
    if (this.novofilme.id) {
      await this.servicefilme.salvarFilme(this.novofilme);
    } else {
      await this.servicefilme.adicionaFilme(this.novofilme);
    }
    await this.listar();
    this.novofilme = new Filme();
  }
  async listar() {
    let res = await this.servicefilme.listarfilmes();
    this.filmes = Object.values(res.data);
  }

  ngOnInit(): void {
    this.listar();
  }

  async excluirFilme(id: string) {
    await this.servicefilme.excluirfilmes(id);
    await this.listar();
  }

  editar(filme: Filme) {
    this.novofilme = filme;
  }
}
