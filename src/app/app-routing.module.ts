import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoInfoComponent } from './agenda/contato-info/contato-info.component';
import { Error404Component } from './error404/error404.component';



const routes: Routes = [
  {path: '', redirectTo: 'contato', pathMatch: 'full'},
  {path: './agenda/contato-info/contato-info/:id', component: ContatoInfoComponent  },
  {path: 'contato', loadChildren: () =>import("./agenda/agenda.module").then(m => m.AgendaModule) },
  {path: '**', component: Error404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
