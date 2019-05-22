import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './route/app-routing.module';
import { AppComponent } from './app.component';

import { APP_BASE_HREF } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AthentificationComponent } from './pages/athentification/athentification.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SocieteComponent } from './pages/securite/societe/societe.component';
import { UtilisateurComponent } from './pages/securite/utilisateur/utilisateur.component';
import { ProfilComponent } from './pages/securite/profil/profil.component';
import { RubriqueComponent } from './pages/securite/rubrique/rubrique.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AthentificationComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SocieteComponent,
    UtilisateurComponent,
    ProfilComponent,
    RubriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
