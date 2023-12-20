import {Component, OnInit} from '@angular/core';
import {Match} from "../../../shared/model/match";
import {Jogador} from "../../../shared/model/jogador";
import {MensagemService} from "../../../shared/services/mensagem.service"
import {MatchService} from "../../../shared/services/match.service"
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-sorteio-match',
  templateUrl: './sorteio-match.component.html',
  styleUrls: ['./sorteio-match.component.scss']
})
export class SorteioMatchComponent implements OnInit{
  jogadores=  [];
  numero_times = 0

  constructor(private MatchService: MatchService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    // @ts-ignore
    this.MatchService.readById(id).subscribe(match => {
      // @ts-ignore
      this.jogadores = match.jogadores;
      console.log(this.jogadores)
    })

  }
}
