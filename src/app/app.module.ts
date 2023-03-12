import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BorneShowComponent } from './borne-show/borne-show.component';
import { SearchComponent } from './search/search.component';
import { FormulaireUserComponent } from './formulaire-user/formulaire-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BorneListComponent } from './borne-list/borne-list.component';
import { BorneDetailsComponent } from './borne-details/borne-details.component';
import { ProfilDetailComponent } from './profil/profil-detail/profil-detail.component';
import { ProfilBorneComponent } from './profil/profil-borne/profil-borne.component';
import { ProfilReservationComponent } from './profil/profil-reservation/profil-reservation.component';
import { ProfilSideMenuComponent } from './profil/profil-side-menu/profil-side-menu.component';
import { LoginComponent } from './login/login.component';
import { HttpTokenInterceptor } from 'src/config/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BorneShowComponent,
    SearchComponent,
    FormulaireUserComponent,
    BorneListComponent,
    BorneDetailsComponent,
    ProfilDetailComponent,
    ProfilBorneComponent,
    ProfilReservationComponent,
    ProfilSideMenuComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'rawUrl',
      useValue: 'http://localhost:8080/api/'
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
