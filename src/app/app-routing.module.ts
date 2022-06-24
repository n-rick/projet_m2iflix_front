import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FilmComponent } from './components/film/film.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MesFilmsComponent } from './components/mes-films/mes-films.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", component: ConnexionComponent},
  { path: "connexion", component: ConnexionComponent },
  { path: "inscription", component: InscriptionComponent},
  { path: "films", component: FilmComponent, canActivate: [AuthGuard] },
  { path: "mes-films", component: MesFilmsComponent, canActivate: [AuthGuard] },
  { path: "a-propos", component: AProposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
