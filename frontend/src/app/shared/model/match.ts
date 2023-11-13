import {Jogador} from "./jogador";

export class Match{
  public nome: string;
  public esporte: string;
  public dia_da_semana: string;
  public numero_de_jogadores: number;
  public jogadores: Array<Jogador>;

  constructor(nome: string, esporte:string, dia_da_semana:string) {
    this.nome = nome;
    this.esporte = esporte;
    this.dia_da_semana = dia_da_semana;
    this.numero_de_jogadores = 0;
    this.jogadores = new Array<Jogador>();
  }

}
