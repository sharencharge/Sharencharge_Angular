import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BorneShowComponent } from './borne-show/borne-show.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BorneListComponent } from './borne-list/borne-list.component';
import { BorneDetailsComponent } from './borne-details/borne-details.component';
import { ProfilDetailComponent } from './profil/profil-detail/profil-detail.component';
import { ProfilBorneComponent } from './profil/profil-borne/profil-borne.component';
import { ProfilReservationComponent } from './profil/profil-reservation/profil-reservation.component';
import { ProfilSideMenuComponent } from './profil/profil-side-menu/profil-side-menu.component';
import { LoginComponent } from './login/login.component';
import { HttpTokenInterceptor } from 'src/config/http-interceptor';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { FormAjoutBorneComponent } from './form-ajout-borne/form-ajout-borne.component';
import { FooterComponent } from './footer/footer.component';
import { ZShaChaHistComponent } from './z-sha-cha-hist/z-sha-cha-hist.component';
import { AccessGuard } from 'src/config/access-guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BorneShowComponent,
    SearchComponent,
    SidebarComponent,
    BorneListComponent,
    BorneDetailsComponent,
    ProfilDetailComponent,
    ProfilBorneComponent,
    ProfilReservationComponent,
    ProfilSideMenuComponent,
    LoginComponent,
    FormInscriptionComponent,
    FormAjoutBorneComponent,
    FooterComponent,
    ZShaChaHistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: 'rawUrl',
      useValue: 'http://localhost:8080/api/'
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    [AccessGuard]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
