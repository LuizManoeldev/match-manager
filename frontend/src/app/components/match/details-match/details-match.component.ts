import {Component, ElementRef, Renderer2, SimpleChanges} from '@angular/core';
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
export class DetailsMatchComponent {
  match: Match = new Match()
  jogador: Jogador = new Jogador()
  scores = [1, 2, 3, 4, 5]
  displayedColumns = ['nome', 'capitao', 'score', 'actions']

  constructor(private MatchService: MatchService,
              private router: Router,
              private route: ActivatedRoute,
              private el: ElementRef,
              private cdr: ChangeDetectorRef,
              private MensagemService: MensagemService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') // chega ate o component por um router. Por aqui puxa os dados dessa rota
    // @ts-ignore - ignorar que possivelmente pode ser null
    this.MatchService.readById(id).subscribe(match => {
      this.match = match;
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
      "capitao": this.jogador.capitao,
      "score": this.jogador.score
    }

    this.match.jogadores = this.match.jogadores.concat(JogadorDTO)
    this.cdr.detectChanges();
    this.MatchService.addPlayer(this.match, JogadorDTO).subscribe(()=> {
      this.MensagemService.success(`${JogadorDTO.nome} added successfully`);
    })

    this.jogador = new Jogador()
  }

  deleteJogador(nome: string){
    // @ts-ignore
    const jogadorIndex = this.match.jogadores.findIndex(jogador => jogador.nome === nome);
    const jogador = this.match.jogadores[jogadorIndex];


    this.match.jogadores.splice(jogadorIndex, 1);

    this.cdr.detectChanges();
    // @ts-ignore
    this.MatchService.deletePlayer(this.match, jogador.id).subscribe(()=> {
      this.MensagemService.success(`${nome} removed successfully`);
    })
  }

  isCapitan() {
    this.jogador.capitao = true;
    this.cdr.detectChanges();
  }
}
