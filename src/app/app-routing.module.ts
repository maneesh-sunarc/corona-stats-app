import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoronaStatsListComponent} from '../app/corona-stats-list/corona-stats-list.component';

const routes: Routes = [
{ path: '', component: CoronaStatsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
