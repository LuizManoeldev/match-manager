import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'


//Template
import { LayoutModule } from './components/layout/layout.module';

// Views
import { ViewsModule } from './views/views.module';

//Shared
import {MaterialModule} from "./shared/material/material.module";

//Match
import { MatchModule } from './components/match/match.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatchModule,
    HttpClientModule,
    ViewsModule,
    LayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
