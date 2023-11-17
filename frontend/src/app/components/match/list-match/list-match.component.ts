import { Component } from '@angular/core';
import {Match} from "../../../shared/model/match";
import {MatchService} from "../../../shared/services/match.service"
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent {
  matches: Array<Match>;


  constructor(private matchService: MatchService,
              private router: Router) {
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
        return "../../../../assets/images/volei.png"
      default:
        return "../../../../assets/images/soccer.png"
    }
  }

  navegateToMatchCreate() {
    this.router.navigate(['/matches/create'])
  }

}


