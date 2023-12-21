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
  qtd_jogadores_por_time = 0
  tipoEspecial = ''

  times_sorteados: any[] | undefined

  constructor(private MatchService: MatchService,
              private router: Router,
              private route: ActivatedRoute,
              private MensagemService: MensagemService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    // @ts-ignorecd
    this.MatchService.readById(id).subscribe(match => {
      // @ts-ignore
      this.jogadores = match.jogadores;
      this.tipoEspecial = match.esporte.toLowerCase() === 'volei' ? 'Levantador' : match.esporte.toLowerCase() === 'futebol' ? 'Goleiro' : 'Invalido';
    })

  }

  realizarSorteio() {
    if((this.numero_times < 1)){
      this.MensagemService.error("Numero de times invalido")
      return
    } else if(this.qtd_jogadores_por_time < 1){
      this.MensagemService.error("Numero de jogadores invalido")
      return
    }else if(this.jogadores.length < 1){
      this.MensagemService.error("Sem jogadores")
      return
    }
    const embaralharJogadores = (array: string | any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // @ts-ignore
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    embaralharJogadores(this.jogadores);

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
        // @ts-ignore
        times[timeIndex].totalScore += jogador.score;
      }
    }

    // Calcular a média dos scores para cada time
    for (const time of times) {
      if (time.jogadores.length > 0) {
        time.mediaScore = time.totalScore / time.jogadores.length;
      } else {
        time.mediaScore = 0; // Evita divisão por zero
      }
    }

    // @ts-ignore
    this.times_sorteados = times
    this.MensagemService.success("Sorteio realizado!")
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
