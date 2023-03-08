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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BorneShowComponent,
    SearchComponent,
    FormulaireUserComponent,

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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
