import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateMatchComponent } from './create-match/create-match.component';
import { ListMatchComponent } from './list-match/list-match.component';
import {MaterialModule} from "../../shared/material/material.module";
import { DetailsMatchComponent } from './details-match/details-match.component';


@NgModule({
  declarations: [
    CreateMatchComponent,
    ListMatchComponent,
    DetailsMatchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    ListMatchComponent
  ]
})
export class MatchModule { }
