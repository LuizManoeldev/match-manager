import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'matchs',
    component: MainComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
