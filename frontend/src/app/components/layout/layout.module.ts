import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../shared/material/material.module'
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet
  ],
  exports:[
    HeaderComponent,
    NavComponent
  ]
})
export class LayoutModule { }
