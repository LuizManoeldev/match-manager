import {Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatchService} from "../../../shared/services/match.service"
import {Match} from "../../../shared/model/match";
import {Jogador} from "../../../shared/model/jogador";
import { ChangeDetectorRef } from '@angular/core';
import {MatchFirestoreService} from "../../../shared/services/match-firestore.service";
import {MensagemService} from "../../../shared/services/mensagem.service";
@Component({
  selector: 'app-details-match',
  templateUrl: './details-match.component.html',
  styleUrls: ['./details-match.component.scss']
})
export class DetailsMatchComponent implements OnInit, OnChanges {
  match: Match = new Match()
  jogador: Jogador = new Jogador()
  scores = [1, 2, 3, 4, 5]
  tipoEspecial = ''
  displayedColumns = ['nome', 'capitao', 'score', 'actions']


  constructor(private MatchService: MatchService,
              private router: Router,
              private route: ActivatedRoute,
              private el: ElementRef,
              private cdr: ChangeDetectorRef,
              private MensagemService: MensagemService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    // @ts-ignore
    this.MatchService.readById(id).subscribe(match => {
      this.match = match;
      this.tipoEspecial = this.match.esporte.toLowerCase() === 'volei' ? 'Levantador' : this.match.esporte.toLowerCase() === 'futebol' ? 'Goleiro' : 'Invalido';

    })
  }

  ngOnChanges(changes: SimpleChanges){
    const id = this.route.snapshot.paramMap.get('id') // chega ate o component por um router. Por aqui puxa os dados dessa rota
    // @ts-ignore - ignorar que possivelmente pode ser null
    this.MatchService.readById(id).subscribe(match => {
      this.match = match;
    })
  }


  addJogador(){

    const JogadorDTO = {
      "nome": this.jogador.nome,
      "especial": this.jogador.especial,
      "score": parseInt(String(this.jogador.score), 1)
    }

    this.validate(JogadorDTO)

    this.cdr.detectChanges();
    this.match.jogadores = this.match.jogadores.concat(JogadorDTO)
    this.MatchService.addPlayer(this.match, JogadorDTO).subscribe(()=> {
      this.MensagemService.success(`${JogadorDTO.nome} adicionado!`);
    })

    this.jogador = new Jogador()
  }

  deleteJogador(jogador: Jogador){
    // @ts-ignore
    this.match.jogadores = this.match.jogadores.filter(j => j.nome !== jogador.nome)
    this.cdr.detectChanges()

    // @ts-ignore
    this.MatchService.deletePlayer(this.match, jogador.id).subscribe(()=> {
      this.MensagemService.success(`${jogador.nome} removed successfully`);
    })
  }

  isEspecial() {
    this.jogador.especial = true;
    this.cdr.detectChanges();
  }

  gerarSorteio() {
    this.router.navigate([`matches/details/${this.match.id}/sorteio`])
  }

  validate(jogador: Jogador){
    const nomeRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/;

    if(!nomeRegex.test(jogador.nome.trim())){
      this.MensagemService.error(`Digite o nome do jogador`)
      return false
    } else if(jogador.score < 1){
      this.MensagemService.error('Escolha o score');
      return false
    } else{
      return true
    }
  }
}
