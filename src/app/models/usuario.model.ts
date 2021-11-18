import { Filme } from "./filme.model";

export class Usuario {
  nome: string;
  email: string;
  senha: string;
  id?: string;
  filmeFavorito: Filme;
}
