import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {LeagueService} from '../../services/league.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

  data: any;
  public url: any;
  private stats: any;
  private i: any;
  public team1: Array<any>;
  public team2: Array<any>;

  constructor(private breakpointObserver: BreakpointObserver,private leagueService: LeagueService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.team1 = new Array<any>();
    this.team2 = new Array<any>();
    const route = this.route.params.subscribe((params) => {
      const id = params['id'];
      const league = this.leagueService.getLigue(id).subscribe(
        res => {
          this.data = res.response.results;
          this.stats = res.response
          for(this.i=0; this.i<this.data.length; this.i++){
            this.team1.push(this.data[this.i].side1.replace('-','').replace(' ','-').toLowerCase());
            this.team2.push(this.data[this.i].side2.replace('-','').replace(' ','-').toLowerCase());
          }
console.log(this.data)

        }, () => {
          console.log("erreur d'appel a league service");
        },
        () => { if (league) { league.unsubscribe() } });
    },
      () => { if (route) { route.unsubscribe() } });
  }

}
