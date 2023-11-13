import { Component } from '@angular/core';
import {Match} from "../../../shared/model/match";
import {MatchService} from "../match.service"

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent {
  matchs: Array<Match>;


  constructor(private matchService: MatchService) {
    this.matchs = new Array<Match>;

  }

  ngOnInit(){
    this.matchService.read().subscribe(matchs => {
        this.matchs = matchs
    }
      )

     const Match1 = new Match('Match dos Amigos','Futebol', 'Quinta')
    const Match2 = new Match('Volei e Piadas', 'Volei', 'Quarta');
    const Match3 = new Match('Fut do Sabado', 'futebol', 'Sabado');
    const Match4 = new Match('Match dos Irmaos', 'Volei', 'Sexta');
    const Match5 = new Match('Match dos Irmaos', 'Volei', 'Sexta');
    const Match6 = new Match('Match dos Irmaos', 'Volei', 'Sexta');
    const Match7 = new Match('Match dos Irmaos', 'Volei', 'Sexta');

    this.matchs.push(Match1);
    this.matchs.push(Match2);
    this.matchs.push(Match3);
    this.matchs.push(Match4);
    this.matchs.push(Match5);
    this.matchs.push(Match6);
    this.matchs.push(Match7); 

  }

  getImageUrl(match: Match): string {
    const stringP = match.esporte
    switch (stringP.toLowerCase()) {
      case "volei":
        return "https://www.vera.mt.gov.br/fotos_bancoimagens/1120.png"
      default:
        return "https://cdn.cnt.org.br/diretorioVirtualPrd/b6506537-0243-4723-be22-2ad8e438078b_CorteRetangular.png"

    }
  }

}
