import { Component } from '@angular/core';
import {Match} from "../../../shared/model/match";
import {MatchService} from "../../../shared/services/match.service"
import {Router} from "@angular/router";
import {Jogador} from "../../../shared/model/jogador";
import {MatchFirestoreService} from "../../../shared/services/match-firestore.service";
@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent {
  match: Match = new Match('', '', '')
  esportes = ["Futebol", "Volei"]
  dias_da_semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"]

  constructor(private MatchService: MatchFirestoreService,
              private router: Router,) {
  }

  createMatch(){
    this.MatchService.create(this.match).subscribe(()=> {
      this.router.navigate(['/matches'])
    })
  }

  cancel() {
    this.router.navigate(['/matches'])
  }
}
