import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AgendaModule } from './agenda/agenda.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavBarComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AgendaModule,
  ],

  exports:[
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
