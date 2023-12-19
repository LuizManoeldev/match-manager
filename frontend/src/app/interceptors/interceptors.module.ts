import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErroInterceptor} from "./erro.interceptor";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErroInterceptor,
      multi: true
    }
  ]
})
export class InterceptorsModule { }
