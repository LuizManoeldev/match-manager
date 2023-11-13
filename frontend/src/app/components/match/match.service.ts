import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Match } from 'src/app/shared/model/match';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  baseUrl = ' http://localhost:3001/matchs'

  constructor(private http: HttpClient) { }

  create(){

  }

  update(){

  }

  read(): Observable<Match[]>{
    return this.http.get<Match[]>(this.baseUrl)
  }

  delete() {

  }
}
