import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../shared/material/material.module'


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MainComponent
  ]
})
export class TemplateModule { }
