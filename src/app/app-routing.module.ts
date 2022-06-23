import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FilmComponent } from './components/film/film.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const routes: Routes = [
  { path: "", component: ConnexionComponent},
  { path: "connexion", component: ConnexionComponent },
  { path: "inscription", component: InscriptionComponent},
  { path: "film", component: FilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
