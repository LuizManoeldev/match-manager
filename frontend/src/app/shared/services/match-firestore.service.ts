import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, map, Observable} from "rxjs";
import {Match} from "../model/match";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class MatchFirestoreService {

  colecaoMatches: AngularFirestoreCollection<Match>;
  NOME_COLECAO = 'matches ';

  constructor(private afs: AngularFirestore) {
    this.colecaoMatches = afs.collection(this.NOME_COLECAO);
  }

  read(): Observable<Match[]> {
    return this.colecaoMatches.valueChanges({idField: 'id'});
  }


  create(Match: Match): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    delete Match.id;
    // Object.assign({}, Match) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoMatches.add(Object.assign({}, Match)));
  }

  delete(match: Match): Observable<void> {
    return from(this.colecaoMatches.doc(match.id).delete());
  }

  readById(id: string): Observable<Match> {
    return this.colecaoMatches.doc(id).get().pipe(map(document =>
      new Match(id, document.data())));
  }

  update(Match: Match): Observable<void> {
    const id = Match.id;
    delete Match.id;
    return from(this.colecaoMatches.doc(id).update(Object.assign({}, Match)));


  }
//
//
//   listarMaioresDeIdade(): Observable<Match[]> {
//     let MatchsMaioresIdade: AngularFirestoreCollection<Match>;
//     // fazendo pesquisas usando o where. Um where pode ser encadeado com outro
//     MatchsMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
//     return MatchsMaioresIdade.valueChanges();
//   }


}
