import {Jogador} from "./jogador";

export class Match {
  public id?: string;
  public nome: string;
  public dia_da_semana: string;
  public esporte: string;
  public jogadores: Jogador[] = new Array<Jogador>();
  public numero_de_jogadores: number = this.jogadores.length;

  constructor(id?: string, match: Partial<Match> = {}) {
    this.id = id;
    this.nome = match.nome || '';
    this.dia_da_semana = match.dia_da_semana || '';
    this.esporte = match.esporte || '';
    this.jogadores = match.jogadores || [];
    this.numero_de_jogadores = this.jogadores.length;
  }
}

