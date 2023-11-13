import {Jogador} from "./jogador";

export interface Match{
  id?: number;
  nome: string;
  esporte: string;
  dia_da_semana: string;
  numero_de_jogadores: number
  jogadores: Jogador[];
}
