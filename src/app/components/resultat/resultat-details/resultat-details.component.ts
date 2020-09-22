import { Component, OnInit } from '@angular/core';
import {ResultDetailService} from '../../../services/result-detail.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-resultat-details',
  templateUrl: './resultat-details.component.html',
  styleUrls: ['./resultat-details.component.css']
})
export class ResultatDetailsComponent implements OnInit {
  public data: any;
  public goals: Array<any>;
  public listcartonJaune: Array<any>;
  public cartonJaune1: Array<any>;
  public cartonJaune2: Array<any>;
  public Team1: Array<any>;
  public Team2: Array<any>;
  private i: number;
  private j: number;
  private x: number;
  private x1: number;
  public matchDate: string;
  public possession1: any;
  public possession2: any;
  public tirCadre1: any;
  public tirCadre2: any;
  public tir1: any;
  public tir2: any;
  public fautes1: any;
  public fautes2: any;
  public corners1: any;
  public corners2: any;
  public arrets1: any;
  public arrets2: any;
  public touches1: any;
  public touches2: any;
  public pourcentagearret1: any;
  public pourcentagearret2: any;
  public pourcentagefaute1: any;
  public pourcentagefaute2: any;
  public pourcentagecorner1: any;
  public pourcentagecorner2: any;
  public pourcentagetouche1: any;
  public pourcentagetouche2: any;
  public pourcentagecarton1: any;
  public pourcentagecarton2: any;
  private percent: string;
  public url: String;
  status: any;
  public id1: any;
  public id2: any;
  public sc1: any;
  public sc2: any;
  public s1: any;
  public s2: any;
  constructor(private resultdetailservice: ResultDetailService,private route: ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    this.goals = new Array<any>();
    this.listcartonJaune = new Array<any>();
    this.cartonJaune1 = new Array<any>();
    this.cartonJaune2 = new Array<any>();
    this.Team1 = new Array<any>();
    this.Team2 = new Array<any>();
    const route = this.route.params.subscribe((params) => {
      const team1 = params['team1'];
      const team2 = params['team2'];
      const match = this.resultdetailservice.getMatch(team1,team2).subscribe(
        res => {
          this.percent = "%";
          this.data = res.response;
          this.status = this.data.s;
          this.id1 = this.data.s1Id;
          this.id2 = this.data.s2Id;
          this.sc1 = this.data.sc1;
          this.sc2 = this.data.sc2;
          this.s1 = this.data.s1;
          this.s2 = this.data.s2;
          // this.matchDate = this.data.v[0].t;
          this.possession1 = this.data.st[0].v1;
          this.possession2 = this.data.st[0].v2;
          this.tir1 = this.data.st[1].v1;
          this.tir2 = this.data.st[1].v2;
          this.tirCadre1 = this.data.st[2].v1;
          this.tirCadre2 = this.data.st[2].v2;
          this.fautes1 = this.data.st[3].v1;
          this.fautes2 = this.data.st[3].v2;
          this.corners1 = this.data.st[4].v1;
          this.corners2 = this.data.st[4].v2;
          this.arrets1 = this.data.st[5].v1;
          this.arrets2 = this.data.st[5].v2;
          this.touches1 = this.data.st[6].v1;
          this.touches2 = this.data.st[6].v2;

          for(this.i=0; this.i<res.response.ev.length; this.i++){
            if(res.response.ev[this.i].t =='goal' || res.response.ev[this.i].t == 'og' || res.response.ev[this.i].t == 'rc' || res.response.ev[this.i].t == 'pen'){
              this.goals.push(res.response.ev[this.i]);
            }
          }

          for(this.j=0; this.j<res.response.ev.length; this.j++){
            if(res.response.ev[this.j].t =='yc'){
              if(res.response.ev[this.j].s == 1){
                this.cartonJaune1.push(res.response.ev[this.j])
              }else if(res.response.ev[this.j].s == 2){
                this.cartonJaune2.push(res.response.ev[this.j])
              }
            }
          }

          //team1
          for(this.x=0; this.x<res.response.l1.length; this.x++){
           this.Team1.push(res.response.l1[this.x]);
          }
          //team2
          for(this.x1=0; this.x1<res.response.l2.length; this.x1++){
            this.Team2.push(res.response.l2[this.x1]);
          }
          //arret
          this.pourcentagearret1 =  String((this.arrets1 / (this.arrets1 + this.arrets2)) * 100);
          this.pourcentagearret1 =  this.pourcentagearret1.concat(this.percent.toString());
          this.pourcentagearret2 =  String((this.arrets2 / (this.arrets1 + this.arrets2)) * 100);
          this.pourcentagearret2 =  this.pourcentagearret2.concat(this.percent.toString());

          //fautes
          this.pourcentagefaute1 =  String((this.fautes1 / (this.fautes1 + this.fautes2)) * 100);
          this.pourcentagefaute1 =  this.pourcentagefaute1.concat(this.percent.toString());
          this.pourcentagefaute2 =  String((this.fautes2 / (this.fautes1 + this.fautes2)) * 100);
          this.pourcentagefaute2 =  this.pourcentagefaute2.concat(this.percent.toString());

          //corners
          this.pourcentagecorner1 =  String((this.corners1 / (this.corners1 + this.corners2)) * 100);
          this.pourcentagecorner1 =  this.pourcentagecorner1.concat(this.percent.toString());
          this.pourcentagecorner2 =  String((this.corners2 / (this.corners1 + this.corners2)) * 100);
          this.pourcentagecorner2 =  this.pourcentagecorner2.concat(this.percent.toString());

          //touches
          this.pourcentagetouche1 =  String((this.touches1 / (this.touches1 + this.touches2)) * 100);
          this.pourcentagetouche1 =  this.pourcentagetouche1.concat(this.percent.toString());
          this.pourcentagetouche2 =  String((this.touches2 / (this.touches1 + this.touches2)) * 100);
          this.pourcentagetouche2 =  this.pourcentagetouche2.concat(this.percent.toString());

          //carton jaunes
          this.pourcentagecarton1 =  String((this.cartonJaune1.length / (this.cartonJaune1.length + this.cartonJaune2.length)) * 100);
          this.pourcentagecarton1 =  this.pourcentagecarton1.concat(this.percent.toString());
          this.pourcentagecarton2 =  String((this.cartonJaune2.length / (this.cartonJaune1.length + this.cartonJaune2.length)) * 100);
          this.pourcentagecarton2 =  this.pourcentagecarton2.concat(this.percent.toString());

        }, () => {
          console.log("erreur d'appel a league service");
        },
        () => { if (match) { match.unsubscribe() } });
    },
      () => { if (route) { route.unsubscribe() } });
  }

  backClick() {
    this._location.back();
  }

}
