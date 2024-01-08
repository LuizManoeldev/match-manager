import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, map, Observable} from "rxjs";
import {Match} from "../model/match";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Time} from "../model/time";

@Injectable({
  providedIn: 'root'
})
export class MatchFirestoreService {

  colecaoMatches: AngularFirestoreCollection<Match>;
  NOME_COLECAO = 'matches';

  times: Time[] = []

  constructor(private afs: AngularFirestore) {
    this.colecaoMatches = afs.collection(this.NOME_COLECAO);
  }

  read(): Observable<Match[]> {
    return this.colecaoMatches.valueChanges({idField: 'id'});
  }
  create(Match: Match): Observable<object> {
    delete Match.id;
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
    return from(this.colecaoMatches.doc(Match.id).update(Object.assign({}, Match)));
  }

  setTimes(times: Time[]){
    if(times[0].jogadores.length < 1){ return false
    } else{
      this.times = times;
      return true
    }
  }

  getTimes(){
    return this.times
  }

}
