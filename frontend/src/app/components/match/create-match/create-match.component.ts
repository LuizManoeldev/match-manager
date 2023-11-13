import { Component } from '@angular/core';
import {Match} from "../../../shared/model/match";
import {MatchService} from "../match.service"
import {Router} from "@angular/router";
import {Jogador} from "../../../shared/model/jogador";
@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent {
  match: Match = {
    nome: "",
    esporte: "",
    dia_da_semana: "",
    numero_de_jogadores: 0,
    jogadores: new Array<Jogador>
  }
  esportes = ["Futebol", "Volei"]
  dias_da_semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"]

  constructor(private MatchService: MatchService,
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
