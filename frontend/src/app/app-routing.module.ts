import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';
import {CreateMatchComponent} from "./components/match/create-match/create-match.component";
import {DetailsMatchComponent} from "./components/match/details-match/details-match.component";
import {EditMatchComponent} from "./components/match/edit-match/edit-match.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'matches',
    component: MainComponent
  },
  {
    path: 'matches/create',
    component: CreateMatchComponent
  },
  {
    path: 'matches/details/:id',
    component: DetailsMatchComponent
  },
  {
    path: 'matches/details/:id/edit',
    component: EditMatchComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
