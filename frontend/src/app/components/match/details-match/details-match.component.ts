import { Component, ElementRef, Renderer2 } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatchService} from "../../../shared/services/match.service"
import {Match} from "../../../shared/model/match";
import {Jogador} from "../../../shared/model/jogador";
@Component({
  selector: 'app-details-match',
  templateUrl: './details-match.component.html',
  styleUrls: ['./details-match.component.scss']
})
export class DetailsMatchComponent {
  match: Match = {
    nome: "",
    esporte: "",
    dia_da_semana: "",
    numero_de_jogadores: 0,
    jogadores: new Array<Jogador>
  }
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
  ngAfterViewInit() {
    this.atualizarBackground();
  }

  ngOnChanges() {
    this.atualizarBackground();
  }

  atualizarBackground() {
    let imageUrl: string;

    // switch (this.match.esporte.toLowerCase()) {
    //   case 'futebol':
    //     imageUrl = 'url("../../../assets/images/soccer.png")';
    //     break;
    //   case 'volei':
    //     imageUrl = 'url("../../../../assets/images/volei.png")';
    //     break;
    //   default:
    //     imageUrl = 'url("../../../../assets/images/background-1.png")';
    //     break;
    // }

    // Atualiza o background do componente
    this.renderer.setStyle(this.el.nativeElement, 'background-image', "../../../../assets/images/volei.png");
    this.renderer.setStyle(this.el.nativeElement, 'background-size', 'cover');
  }

}
