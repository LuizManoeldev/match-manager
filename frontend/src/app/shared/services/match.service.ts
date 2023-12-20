import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Match } from 'src/app/shared/model/match';
import {catchError, EMPTY, map, Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Jogador} from "../model/jogador";



@Injectable({
  providedIn: 'root'
})
export class MatchService {
  baseUrl = ' http://localhost:8080/matches'

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) {

  }

  create(match: Match): Observable<Match>{
    return this.http.post<Match>(this.baseUrl, match).pipe(
      map((obj) => obj)
    )

  }

  addPlayer(match: Match, jogador: Jogador) :Observable<Match>{
    const url = `${this.baseUrl}/details/${match.id}/${jogador.especial}`
    return this.http.put<Match>(url, jogador)
  }


  deletePlayer(match: Match, id: string){
    const url = `${this.baseUrl}/details/${match.id}/delete/${id}`
    return this.http.put<Match>(url, id)
  }


  read(): Observable<Match[]>{
    return this.http.get<Match[]>(this.baseUrl)
  }

  delete(match: Match): Observable<Match>{
    return this.http.delete<Match>(`${this.baseUrl}/${match.id}`)
  }
  readById(id :string) :Observable<Match>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Match>(url)
  }

  updateInfo(match: Match) :Observable<Match>{
    const url = `${this.baseUrl}/details/${match.id}/edit`
    return this.http.put<Match>(url, match)
  }

}
