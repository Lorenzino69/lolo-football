import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {LeagueService} from '../../services/league.service';
import {MatTableDataSource} from '@angular/material/table';
import {LeagueItem} from '../league/league.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  data: any;
  public url: any;
  private stats: any;

  constructor(private breakpointObserver: BreakpointObserver,private leagueService: LeagueService,private route: ActivatedRoute) {
  }

  ngOnInit() {


    const route = this.route.params.subscribe((params) => {
      const id = params['id'];
      const league = this.leagueService.getLigue(id).subscribe(
        res => {
          this.data = res.response.results;
          this.stats = res.response
        }, () => {
          console.log("erreur d'appel a league service");
        },
        () => { if (league) { league.unsubscribe() } });
    },
      () => { if (route) { route.unsubscribe() } });
  }

  getUrl(scid){

    // window.location.href = ('https://www.scorebat.com/embed/g/' + scid + '/', "_blank");
    window.open('https://www.scorebat.com/embed/g/' + scid + '/', "_blank");
    // return this.url = "https://www.scorebat.com/embed/g/" + scid + "/";


  }
}
