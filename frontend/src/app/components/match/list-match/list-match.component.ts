import { Component } from '@angular/core';
import {Pelada} from "../../../shared/model/pelada";

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent {
  peladas: Array<Pelada>;
  pelada: Pelada;

  constructor() {
    this.peladas = new Array<Pelada>();
    this.pelada = new Pelada('Volei e Piadas', 'Volei', 'Quarta');
  }

  ngOnInit(){

  }

  getImageUrl(): string {
    const stringP = this.pelada.esporte
    switch (stringP.toLowerCase()) {
      case "volei":
        return "https://www.vera.mt.gov.br/fotos_bancoimagens/1120.png"
      default:
        return "https://cdn.cnt.org.br/diretorioVirtualPrd/b6506537-0243-4723-be22-2ad8e438078b_CorteRetangular.png"

    }
  }

}
