import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateMatchComponent } from './create-match/create-match.component';
import { ListMatchComponent } from './list-match/list-match.component';
import { MaterialModule} from "../../shared/material/material.module";
import { DetailsMatchComponent } from './details-match/details-match.component';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { SorteioMatchComponent } from './sorteio-match/sorteio-match.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ListTimesComponent } from './list-times/list-times.component';


@NgModule({
  declarations: [
    CreateMatchComponent,
    ListMatchComponent,
    DetailsMatchComponent,
    EditMatchComponent,
    SorteioMatchComponent,
    ListTimesComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        FlexLayoutModule
    ],
  exports:[
    CreateMatchComponent,
    ListMatchComponent,
    DetailsMatchComponent,
    EditMatchComponent
  ]
})
export class MatchModule { }
