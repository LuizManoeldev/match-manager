import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Match} from '../model/match';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MatchFirestoreService {
  colecaoMatch: AngularFirestoreCollection<Match>;
  NOME_COLECAO = 'matches';

  constructor(private afs: AngularFirestore) {
    this.colecaoMatch = afs.collection(this.NOME_COLECAO);
  }


  listar(): Observable<Match[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoMatch.valueChanges({idField: 'id'});
  }


  inserir(Match: Match): Observable<object> {
    // removendo id pois ele está undefined, já que um novo usuário
    delete Match.id;
    // Object.assign({}, Match) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
    // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
    return from(this.colecaoMatch.add(Object.assign({}, Match)));
  }


  apagar(id: string): Observable<void> {
    return from(this.colecaoMatch.doc(id).delete());
  }


  pesquisarPorId(id: string): Observable<Match> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    return this.colecaoMatch.doc(id).get().pipe(map(document => new Match(document.id, document.data())));
  }


  atualizar(Match: Match): Observable<void> {
    const id = Match.id;
// removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    delete Match.id;
    return from(this.colecaoMatch.doc(id).update(Object.assign({}, Match)));


  }


  listarMaioresDeIdade(): Observable<Match[]> {
    let MatchsMaioresIdade: AngularFirestoreCollection<Match>;
    // fazendo pesquisas usando o where. Um where pode ser encadeado com outro
    MatchsMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
    return MatchsMaioresIdade.valueChanges();
  }


}
