import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ContatoInfoComponent } from './contato-info/contato-info.component';

const ROUTES: Routes = [
  { path: '', component: ContatoComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'contato-info', component: ContatoInfoComponent}
];



@NgModule({
  declarations: [
    ContatoComponent,
    ContatoInfoComponent,
    ContatoInfoComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterModule.forChild(ROUTES),
  ],
  
  exports: [
    ContatoComponent,
    ContatoInfoComponent
  ]
})
export class AgendaModule { }
