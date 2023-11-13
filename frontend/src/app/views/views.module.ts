import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { MatchModule } from '../components/match/match.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    MatchModule
    
  ]
})
export class ViewsModule { }
