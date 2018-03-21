import {NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AttoreComponent} from './attore/attore.component';
import {FilmComponent } from './film/film.component';
import { AttoreFilmComponent } from './attore-film/attore-film.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'film', component: FilmComponent },
  { path: 'attore', component: AttoreComponent },
  { path: 'attorefilm/:attore'  , component: AttoreFilmComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

