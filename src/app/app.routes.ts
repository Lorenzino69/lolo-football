import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BundesligaComponent} from './components/bundesliga/bundesliga.component';
import {LigueAComponent} from './components/ligue-a/ligue-a.component';
import {SerieAComponent} from './components/serie-a/serie-a.component';
import {PremierLeagueComponent} from './components/premier-league/premier-league.component';
import {Ligue1Component} from './components/ligue1/ligue1.component';
import {ActuComponent} from './components/actu/actu.component';
import {ArticleComponent} from './components/article/article.component';
import {ResultatDetailsComponent} from './components/resultat/resultat-details/resultat-details.component';
import {ChronoComponent} from './components/chrono/chrono.component';

export const appRoutes: Routes = [
  { path: '', component: ActuComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Ligue1/:id', component: Ligue1Component},
  { path: 'Bundesliga/:id', component: BundesligaComponent},
  { path: 'LigueA/:id', component: LigueAComponent},
  { path: 'SerieA/:id', component: SerieAComponent},
  { path: 'PremierLeague/:id', component: PremierLeagueComponent},
  { path: 'article/:id', component: ArticleComponent},
  { path: 'result-details/:team1/:team2', component: ResultatDetailsComponent},
  { path: 'chrono', component: ChronoComponent}
];
