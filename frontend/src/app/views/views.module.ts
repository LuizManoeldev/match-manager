import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { MatchModule } from '../components/match/match.module';
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main/main.component";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatchModule
  ],
  exports: [
    MainComponent,
    HomeComponent
  ]
})
export class ViewsModule { }
