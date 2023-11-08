import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePeladaComponent } from './create-pelada/create-pelada.component';
import { ListPeladaComponent } from './list-pelada/list-pelada.component';



@NgModule({
  declarations: [
    CreatePeladaComponent,
    ListPeladaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeladaModule { }
