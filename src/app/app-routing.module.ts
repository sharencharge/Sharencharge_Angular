import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorneDetailsComponent } from './borne-details/borne-details.component';
import { BorneListComponent } from './borne-list/borne-list.component';

const routes: Routes = [
  {path: '', component: BorneListComponent},
  {path: 'stations/:idStation', component: BorneDetailsComponent}, // Details station
  /*
  {path: 'login', component: *LoginComponent*}, //Page de connexion
  {path: 'register', component: *RegisterComponent*}, //Page d'inscription
  {path: 'stations/:cityName', component: *BorneListComponent*}, //Liste des stations après une recherche
  {path: 'profil/:idUser', component: *Component*}, REDIRECT TO'/profil/{id}/details'
  {path: 'profil/:idUser/mydetails', component: *Component*}, // Details user
  {path: 'profil/:idUser/mystation', component: *Component*},
  {path: 'profil/:idUser/myreservation', component: *Component*},
  */
  {path: '**', component: BorneListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
