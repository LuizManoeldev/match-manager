import {Jogador} from "./jogador";

export class Match{
  id?: string;
  nome: string;
  dia_da_semana: string;
  esporte: string;
  numero_de_jogadores: number
  jogadores: Jogador[];

  constructor(nome: string, esporte: string, dia_da_semana: string) {
    this.nome = nome;
    this.dia_da_semana = dia_da_semana;
    this.esporte = esporte;
    this.jogadores = new Array<Jogador>();
    this.numero_de_jogadores = this.jogadores.length;
  }
}
