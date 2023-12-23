import { Component, ElementRef, Renderer2 } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatchService} from "../../../shared/services/match.service"
import {Match} from "../../../shared/model/match";
import {Jogador} from "../../../shared/model/jogador";
import {MatchFirestoreService} from "../../../shared/services/match-firestore.service";
import {MensagemService} from "../../../shared/services/mensagem.service";

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss']
})
export class EditMatchComponent {
  match: Match = new Match();

  constructor(private MatchService: MatchFirestoreService,
              private router: Router,
              private route: ActivatedRoute,
              private el: ElementRef,
              private renderer: Renderer2,
              private MensagemService: MensagemService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') // chega ate o component por um router. Por aqui puxa os dados dessa rota
    // @ts-ignore - ignorar que possivelmente pode ser null
    this.MatchService.readById(id).subscribe(match => {
      this.match = match;
    })
  }

  salvar(){
    if(this.validate()) {
      const id = this.match.id
      this.MatchService.update(this.match).subscribe(() => {
        this.MensagemService.success(`${this.match.nome} atualizado!`);
        this.router.navigate([`/matches/details/${id}`]);

      })
    }
  }

  cancelar(){
    this.router.navigate([`/matches/details/${this.match.id}`])
  }

  deletar(){
    this.MatchService.delete(this.match).subscribe(()=> {
      this.MensagemService.success(`${this.match.nome} removed successfully`)
      this.router.navigate([`/matches`]);
    })
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
