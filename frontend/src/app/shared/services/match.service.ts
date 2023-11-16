import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Match } from 'src/app/shared/model/match';
import {catchError, EMPTY, map, Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class MatchService {
  baseUrl = ' http://localhost:3000/matches'


  constructor(private http: HttpClient) {
  }

  create(match: Match): Observable<Match>{
    return this.http.post<Match>(this.baseUrl, match).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    )
  }

  update(){

  }

  read(): Observable<Match[]>{
    return this.http.get<Match[]>(this.baseUrl)
  }

  delete() {

  }
  showMessage(msg: string, isError: boolean = false){
    console.log(msg)
  }
  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY //observable vazio
  }
}
