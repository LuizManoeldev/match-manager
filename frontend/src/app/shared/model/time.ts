import {Jogador} from "./jogador";

export class Time {
  jogadores: Jogador[] = [];
  forca = 0
  nome = ''
  limiteDeJogadores = 0
  semEspecial: boolean = true

  constructor(nome: string, qtdJogadoresPorTime: number) {
    this.nome = nome;
    this.limiteDeJogadores = qtdJogadoresPorTime;
  }

  isCompleto(){
    return this.jogadores.length == this.limiteDeJogadores
  }

  addJogador(j: null | Jogador | undefined){
    if(this.isCompleto()){
      return
    }
    // @ts-ignore
    this.forca += j.score
    // @ts-ignore
    this.jogadores.push(j);
  }

  reset(){
    this.forca = 0
    this.jogadores = []
  }

  mediaDoTime(){
    let scoreTotal = 0;
    for ( let i = 0; i < this.jogadores.length; i++){
      scoreTotal += this.jogadores[i].score
    }

    return scoreTotal / this.jogadores.length
  }
}
