import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from 'src/config/access-guard';
import { BorneDetailsComponent } from './borne-details/borne-details.component';
import { BorneListComponent } from './borne-list/borne-list.component';
import { LoginComponent } from './login/login.component';
import { ProfilBorneComponent } from './profil/profil-borne/profil-borne.component';
import { ProfilDetailComponent } from './profil/profil-detail/profil-detail.component';
import { ProfilReservationComponent } from './profil/profil-reservation/profil-reservation.component';
import { ZShaChaHistComponent } from './z-sha-cha-hist/z-sha-cha-hist.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';

const routes: Routes = [
  {path: '', component: BorneListComponent},
  {path: 'login', component: LoginComponent}, //Page de connexion
  {path: 'register', component: FormInscriptionComponent},
  {path: 'shacha', component: ZShaChaHistComponent},
  {path: 'stations/:idStation', component: BorneDetailsComponent}, // Details station
  {path: 'profil/mydetails', component: ProfilDetailComponent, data:{requiresLogin: true}, canActivate: [ AccessGuard ]}, // Details user
  {path: 'profil/mystation', component: ProfilBorneComponent},
  {path: 'profil/myreservation', component: ProfilReservationComponent},
  /*
  {path: 'register', component: *RegisterComponent*}, //Page d'inscription
  {path: 'stations/:cityName', component: *BorneListComponent*}, //Liste des stations après une recherche
  {path: 'profil/:idUser', component: *Component*}, REDIRECT TO'/profil/{id}/details'
  */
  {path: '**', component: BorneListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
