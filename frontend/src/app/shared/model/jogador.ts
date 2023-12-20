export class Jogador{
  public id?: string;
  public nome: string;
  public especial: boolean;
  public score: number

  constructor(id?: string, jogador: Partial<Jogador> = {}){
    this.id = id
    this.nome = jogador.nome || '';
    this.especial = jogador.especial || false;
    this.score = jogador.score || 0;
  }

  toString(): string{
    return this.nome
  }
}
