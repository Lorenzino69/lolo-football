import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {LeagueItem} from '../league/league.component';
import {LeagueService} from '../../services/league.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements  OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  data: any;
  public url: any;
  private i: number;
  public team1: Array<any>;
  public team2: Array<any>;


  constructor(private breakpointObserver: BreakpointObserver,private leagueService: LeagueService) {
  }

  ngOnInit(){
    this.team1 = new Array<any>();
    this.team2 = new Array<any>();
    window['ga-disable-UA-XXXXX-Y'] = true;
    this.leagueService.getFeed().subscribe(
      res => {

        this.data = res.response.g;
        this.url = ('https://www.scorebat.com/embed/g/'+ this.data)

        for(this.i=0; this.i<this.data.length; this.i++){
          this.team1.push(this.data[this.i].s1.replace('-','').replace(' ','-').toLowerCase());
          this.team2.push(this.data[this.i].s2.replace('-','').replace(' ','-').toLowerCase());
        }
      }, () => {
        console.log("erreur d'appel a league service");
      });
  }
}
