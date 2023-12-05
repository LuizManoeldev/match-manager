export class Jogador{
  nome: string;
  capitao: boolean;
  score: number

  constructor(nome: string, capitao: boolean, score: number){
    this.nome = nome;
    this.capitao = capitao;
    this.score = score;
  }
}
