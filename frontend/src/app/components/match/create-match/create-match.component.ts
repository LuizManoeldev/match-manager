import { Component } from '@angular/core';
import {Match} from "../../../shared/model/match";
import {MatchService} from "../../../shared/services/match.service"
import {Router} from "@angular/router";
import {Jogador} from "../../../shared/model/jogador";
import {MatchFirestoreService} from "../../../shared/services/match-firestore.service";

import {MensagemService} from "../../../shared/services/mensagem.service";
@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.scss']
})
export class CreateMatchComponent {

  match: Match = new Match()

  constructor(private MatchService: MatchService,
              private router: Router,
              private MensagemService: MensagemService) {
  }

  createMatch(){
    if(this.validate())
      this.MatchService.create(this.match).subscribe(()=> {
        this.MensagemService.success(`${this.match.nome} criado!`)
        this.router.navigate(['/matches'])
      })
  }

  cancel() {
    this.router.navigate(['/matches'])
  }

  validate():boolean{
    const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/;
    if(!nomeRegex.test(this.match.nome.trim())){
      this.MensagemService.error(`Digite um nome valido`)
      return false
    } else if(!this.match.esporte){
      this.MensagemService.error(`Digite um esporte valido`)
      return false
    } else if(!this.match.dia_da_semana){
      this.MensagemService.error(`Digite um dia da semana valido`)
      return false
    }else{
      return true
    }
  }
}
