import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {LeagueService} from '../../services/league.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  data: any;
  public url: any;
  private stats: any;
  events: any;

  constructor(private breakpointObserver: BreakpointObserver,private leagueService: LeagueService,private route: ActivatedRoute) {
  }

  ngOnInit() {

this.getMatch("brest","marseille");
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const league = this.leagueService.getLigue(id).subscribe(
        res => {
          this.data = res.response.results;
          console.log(this.data)
        }, () => {
          console.log("erreur d'appel a league service");
        },
        () => { if (league) { league.unsubscribe() } });
    });
  }

  getMatch(team1,team2){
    const match= this.leagueService.getMatch(team1,team2).subscribe(
      res => {
        this.stats = res.response;
        this.events = res.response.ev;
        console.log(this.events)
      }, () => {
        console.log("erreur d'appel a league service");
      },
      () => { if (match) { match.unsubscribe() } });
  }
}
