import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PremierLeagueComponent } from './components/premier-league/premier-league.component';
import {HomeComponent} from './components/home/home.component';
import {BundesligaComponent} from './components/bundesliga/bundesliga.component';
import {LigueAComponent} from './components/ligue-a/ligue-a.component';
import {Ligue1Component} from './components/ligue1/ligue1.component';
import {SerieAComponent} from './components/serie-a/serie-a.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import { LeagueComponent } from './components/league/league.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {LeagueService} from './services/league.service';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {SafePipe} from './Pipe/safe.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { ResultatComponent } from './components/resultat/resultat.component';
import { StatComponent } from './components/stat/stat.component';
import { ActuComponent } from './components/actu/actu.component';
import {ActuService} from './services/actu.service';
import { ArticleComponent } from './components/article/article.component';
import {ArticleService} from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Ligue1Component,
    LigueAComponent,
    BundesligaComponent,
    SerieAComponent,
    PremierLeagueComponent,
    LeagueComponent,
    SafePipe,
    ResultatComponent,
    StatComponent,
    ActuComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [LeagueService,ActuService,ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
