import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainWrapComponent} from './components/main-wrap/main-wrap.component';


const routes: Routes = [
  {path: '', component: MainWrapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
