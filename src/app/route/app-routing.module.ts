import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SocieteComponent } from '../pages/securite/societe/societe.component';
import { UtilisateurComponent } from '../pages/securite/utilisateur/utilisateur.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProfilComponent } from '../pages/securite/profil/profil.component';
import { RubriqueComponent } from '../pages/securite/rubrique/rubrique.component';

const routes: Routes = [
  {path: '', redirectTo: 'gescom/dashboard', pathMatch:"full" },
  {path: 'gescom/dashboard', component:DashboardComponent},
  {path: 'user',component: UtilisateurComponent},
  { path: 'societe',component: SocieteComponent},
  { path: 'profil',component: ProfilComponent},
  { path: 'rubrique',component: RubriqueComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
