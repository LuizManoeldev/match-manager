import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePeladaComponent } from './create-pelada/create-pelada.component';
import { ListPeladaComponent } from './list-pelada/list-pelada.component';
import {MaterialModule} from "../../shared/material/material.module";


@NgModule({
  declarations: [
    CreatePeladaComponent,
    ListPeladaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CreatePeladaComponent,
    ListPeladaComponent
  ]
})
export class PeladaModule {

}
