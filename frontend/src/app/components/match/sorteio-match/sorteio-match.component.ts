import {Component, OnInit} from '@angular/core';
import {Match} from "../../../shared/model/match";
import {Jogador} from "../../../shared/model/jogador";
import {MensagemService} from "../../../shared/services/mensagem.service"
import {MatchService} from "../../../shared/services/match.service"
import {ActivatedRoute, Router} from "@angular/router";
import {MatchFirestoreService} from "../../../shared/services/match-firestore.service";
import {Time} from "../../../shared/model/time";

@Component({
  selector: 'app-sorteio-match',
  templateUrl: './sorteio-match.component.html',
  styleUrls: ['./sorteio-match.component.scss']
})
export class SorteioMatchComponent implements OnInit{
  jogadores:Jogador[] = [];
  times: Time[] = []
  alfabeto = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

  numero_times = 0
  jogadores_por_time = 0
  forcaMedia = 0

  tipoEspecial = ''






  constructor(private MatchService: MatchFirestoreService,
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
      this.getForcaMedia()
    })

  }

// Adicione o método abaixo à sua classe SorteioMatchComponent
  realizarSorteio() {
    if (this.validate()) {
      this.reloadJogadores();

      let startTime = Date.now(); // Registra o tempo inicial

      do {

        this.preparaTimes();
        this.montaTimes();

        let elapsedTime = Date.now() - startTime; // Calcula o tempo decorrido

        // Se o tempo decorrido for maior ou igual a 5 segundos, sai do loop
        if (elapsedTime >= 3000) {
          this.MensagemService.error("Limite de tempo excedido. Tente novamente se necessario")
          break;
        }
      }while (!this.calculaEquilibrio());
      this.goToList()

    }
  }

  goToList(){
    if(this.MatchService.setTimes(this.times))
      this.router.navigate(['matches/details/:id/sorteio/listagem'])
  }


  preparaTimes(){
    this.times = []
    for ( let i = 0; i < this.numero_times; i++){
      this.times.push(new Time(`${this.alfabeto[i]}`, this.jogadores_por_time))
    }
  }
  montaTimes() {
    this.adicionarEspeciais()
    // Randomiza a lista de jogadores e times
    this.shuffleArray(this.jogadores);

    let itTime = this.times[Symbol.iterator]();
    let jogadorIndex = 0;

    while (this.jogadores.length > 0) {
      const timeDaVez = itTime.next().value as Time;
      if(timeDaVez === undefined) {
        break
      }
      if (timeDaVez.isCompleto()) {
        continue;
      }

      const jogador = this.getJogador(timeDaVez);
      timeDaVez.addJogador(jogador);

      jogadorIndex++;

      if (jogadorIndex === this.times.length) {
        itTime = this.times[Symbol.iterator]();
        jogadorIndex = 0;
      }
    }
  }
  _getJogador(forca: number) {
    let jogadorEncontrado: Jogador | null = null;

    if (this.jogadores.length === 0) {
      return null;
    } else if (this.jogadores.length === 1) {
      return this.jogadores.pop();
    }

    for (let i = 0; i < this.jogadores.length; i++) {
      const jogador = this.jogadores[i];

      if (jogador.score === forca) {
        jogadorEncontrado = jogador;
        break;
      }
    }

    if (jogadorEncontrado !== null) {
      const index = this.jogadores.indexOf(jogadorEncontrado);
      if (index !== -1) {
        this.jogadores.splice(index, 1);
      }
    }

    return jogadorEncontrado;
  }

  getJogador( timeDaVez:Time) {
    let peso = Math.random();

    if (timeDaVez.forca < this.forcaMedia) {
      peso += Math.random();
    } else {
      peso -= Math.random();
    }

    let forca = 0;
    if (peso >= 0 && peso < 0.10) {
      // 10%
      forca = 1;
    } else if (peso >= 0.10 && peso < 0.25) {
      // 15%
      forca = 2;
    } else if (peso >= 0.25 && peso < 0.65) {
      // 40%
      forca = 3;
    } else if (peso >= 0.65 && peso < 0.95) {
      // 30%
      forca = 4;
    } else if (peso >= 0.95) {
      // 5%
      forca = 5;
    }

    let jj = this._getJogador(forca);
    while (jj == null && this.jogadores.length > 0)
      jj = this.getJogador(timeDaVez);

    return jj;
  }



  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  reloadJogadores(){
    const id = this.route.snapshot.paramMap.get('id')
    // @ts-ignorecd
    this.MatchService.readById(id).subscribe(match => {
      // @ts-ignore
      this.jogadores = match.jogadores;

    })
  }

  // @ts-ignore
  getJogadorEspecial(): Jogador | null {
    this.shuffleArray(this.jogadores);
    let jogadorEspecial = new Jogador();
    let jogadorAlternativo = new Jogador();

    this.jogadores.forEach(jj => {
      if(jj.especial){
        jogadorEspecial = jj
        return
      }
    })

    this.jogadores = this.jogadores.filter(j => j.nome !== jogadorEspecial.nome)

    if(jogadorEspecial.especial){
      return jogadorEspecial;
    } else{ // caso nao existam mais jogadores especiais
      jogadorAlternativo = this.jogadores[0]
      this.jogadores = this.jogadores.filter(j => j.nome !== jogadorAlternativo.nome)

      return jogadorAlternativo
    }
  }

  adicionarEspeciais(){
    for (let i = 0; i < this.times.length; i++) {
      if (this.times[i].semEspecial){
        // @ts-ignore
        let jogador = this.getJogadorEspecial()

        if(jogador)
          this.times[i].addJogador(jogador)
      }
    }
  }

  qtdEspeciais(){
    this.jogadores.forEach(jgd => {
      if(jgd.especial){
        contador += 1
      }
    })

    return contador
  }

  getForcaMedia() {
    let forcaTotal = 0
    for( let jogador of this.jogadores) {
      // @ts-ignore
      forcaTotal += jogador.score
    }
    this.forcaMedia = forcaTotal / this.jogadores.length
  }

  calculaEquilibrio(){
    let forcaMinima = Number.MAX_VALUE;
    let forcaMaxima = Number.MIN_VALUE;

    for (let time of this.times) {
      forcaMinima = Math.min(time.forca, forcaMinima);
      forcaMaxima = Math.max(time.forca, forcaMaxima);
    }

    // Verifica se a força minima é ao menos 75% da força maxima
    return !(forcaMinima < 0.76 * forcaMaxima)

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
    this.jogadores_por_time += 1;
  }

  menosJogadores(){
    if(this.jogadores_por_time != 0){
      this.jogadores_por_time -= 1;
    }

  }

  validate(){
    if((this.numero_times < 1)){
      this.MensagemService.error("Numero de times invalido")
      return false
    } else if(this.jogadores_por_time < 1){
      this.MensagemService.error("Numero de jogadores invalido")
      return false
    }else if (this.jogadores.length < 1){
      this.MensagemService.error("Recarregue a pagina")
      return false
    } else{
      return true
    }
  }


}
