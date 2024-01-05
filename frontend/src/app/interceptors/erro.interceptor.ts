import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {MensagemService} from "../shared/services/mensagem.service";

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => this.trataRespostaErro(error))
    );
  }

  private trataRespostaErro(error: any): Observable<HttpEvent<any>> {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        // Lidar com erro de autenticação (por exemplo, redirecionar para a página de login)
        this.mensagemService.error('Erro de autenticação');
      } else {
        // Lidar com outros erros
        this.mensagemService.error(`Erro: ${error.message}`);
      }
    }

    return throwError(error);
  }
}
