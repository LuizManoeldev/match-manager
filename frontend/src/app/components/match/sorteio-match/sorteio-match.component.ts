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
  numero_times = 2
  qtd_jogadores_por_time = 4
  tipoEspecial = ''

  times_sorteados: any[] | undefined


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
      this.tipoEspecial = match.esporte.toLowerCase() === 'volei' ? 'Levantador' : match.esporte.toLowerCase() === 'futebol' ? 'Goleiro' : 'Invalido';
    })

  }

  realizarSorteio() {
    if (this.jogadores.length < this.numero_times) {
      console.log("Não há jogadores suficientes para formar os times.");
      return;
    }

    // @ts-ignore
    this.jogadores.sort((a, b) => b.score - a.score);

    const times: any[] = [];

    for (let i = 0; i < this.numero_times; i++) {
      times[i] = { jogadores: [], jogadorEspecial: null };
    }

    for (let i = 0; i < this.jogadores.length; i++) {
      const jogador = this.jogadores[i];
      const timeIndex = i % this.numero_times;

      // @ts-ignore
      if (times[timeIndex].jogadorEspecial === null && jogador.especial) {
        times[timeIndex].jogadorEspecial = jogador;
      } else {
        times[timeIndex].jogadores.push(jogador);
      }
    }

    // Se um time terminar com menos jogadores do que o desejado
    // Remova o jogador especial desse time
    // for (let i = 0; i < this.numero_times; i++) {
    //   if (times[i].jogadores.length < this.qtd_jogadores_por_time) {
    //     times[i].jogadores.pop();
    //   }
    // }


    // @ts-ignore
    this.times_sorteados = times
  }



  maisTimes(){
    this.numero_times += 1
  }

  menosTimes(){
    if(this.numero_times != 0){
      this.numero_times -= 1;
    }
  }

  maisJogadores(){
    this.qtd_jogadores_por_time += 1;
  }

  menosJogadores(){
    if(this.qtd_jogadores_por_time != 0){
      this.qtd_jogadores_por_time -= 1;
    }

  }


}
