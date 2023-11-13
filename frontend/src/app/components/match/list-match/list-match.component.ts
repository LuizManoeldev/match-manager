import { Component } from '@angular/core';
import {Match} from "../../../shared/model/match";
import {MatchService} from "../match.service"

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent {
  matches: Array<Match>;


  constructor(private matchService: MatchService) {
    this.matches = new Array<Match>;

  }

  ngOnInit(){
    this.matchService.read().subscribe(matches => {
        this.matches = matches

    }
      )

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
