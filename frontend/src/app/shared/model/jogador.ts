export class Jogador{
  public id?: string;
  public nome: string;
  public capitao: boolean;
  public score: number

  constructor(id?: string, jogador: Partial<Jogador> = {}){
    this.id = id
    this.nome = jogador.nome || '';
    this.capitao = jogador.capitao || false;
    this.score = jogador.score || 0;
  }
}
