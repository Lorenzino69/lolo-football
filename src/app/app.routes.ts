import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BundesligaComponent} from './components/bundesliga/bundesliga.component';
import {LigueAComponent} from './components/ligue-a/ligue-a.component';
import {SerieAComponent} from './components/serie-a/serie-a.component';
import {PremierLeagueComponent} from './components/premier-league/premier-league.component';
import {Ligue1Component} from './components/ligue1/ligue1.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Ligue1/:id', component: Ligue1Component},
  { path: 'Bundesliga/:id', component: BundesligaComponent},
  { path: 'LigueA/:id', component: LigueAComponent},
  { path: 'SerieA/:id', component: SerieAComponent},
  { path: 'PremierLeague/:id', component: PremierLeagueComponent},

];
