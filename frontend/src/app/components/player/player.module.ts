import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { ListPlayerComponent } from './list-player/list-player.component';



@NgModule({
  declarations: [
    CreatePlayerComponent,
    ListPlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerModule { }
