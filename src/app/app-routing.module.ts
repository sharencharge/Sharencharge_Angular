import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorneListComponent } from './borne-list/borne-list.component';

const routes: Routes = [{path: '', component: BorneListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
