import {Component, HostListener, OnInit, SimpleChanges} from '@angular/core';
import {Match} from "../../../shared/model/match";
import {MatchService} from "../../../shared/services/match.service"
import {Router} from "@angular/router";
import {MatchFirestoreService} from "../../../shared/services/match-firestore.service";

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent implements OnInit{
  matches: Match[] = [];

  constructor(private matchService: MatchFirestoreService,
              private router: Router) {

  }

  ngOnInit(){
    this.matchService.read().subscribe(matches => {
      this.matches = matches
    })
  }



  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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


