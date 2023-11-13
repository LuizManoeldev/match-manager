import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMatchComponent } from './create-match/create-match.component';
import { ListMatchComponent } from './list-match/list-match.component';
import {MaterialModule} from "../../shared/material/material.module";


@NgModule({
  declarations: [
    CreateMatchComponent,
    ListMatchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ListMatchComponent
  ]
})
export class MatchModule { }
