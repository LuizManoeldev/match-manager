import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../shared/material/material.module'
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ViewsModule} from "../../views/views.module";

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    ViewsModule,
    RouterLink
  ],
  exports:[
    HeaderComponent,
    NavComponent
  ]
})
export class LayoutModule { }
