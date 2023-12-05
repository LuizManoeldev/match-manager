import { Component, ElementRef, Renderer2 } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatchService} from "../../../shared/services/match.service"
import {Match} from "../../../shared/model/match";
import {Jogador} from "../../../shared/model/jogador";

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.scss']
})
export class EditMatchComponent {
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
              private router: Router,
              private route: ActivatedRoute,
              private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') // chega ate o component por um router. Por aqui puxa os dados dessa rota
    // @ts-ignore - ignorar que possivelmente pode ser null
    this.MatchService.readById(id).subscribe(match => {
      this.match = match;
    })
  }

  salvar(){
    this.MatchService.update(this.match).subscribe(()=> {
      this.router.navigate([`/matches/details/${this.match.id}`]);
    })
  }

  cancelar(){
    this.router.navigate([`/matches/details/${this.match.id}`])
  }

  deletar(){
    this.MatchService.delete(this.match).subscribe(()=> {
      this.router.navigate([`/matches`]);
    })
  }

}
