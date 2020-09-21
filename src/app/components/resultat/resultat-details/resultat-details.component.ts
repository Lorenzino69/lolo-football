import { Component, OnInit } from '@angular/core';
import {ResultDetailService} from '../../../services/result-detail.service';
import {ActivatedRoute} from '@angular/router';

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
  private i: number;
  public matchDate: string;
  public possession: any;
  public tirCadre: any;
  public tir: any;
  public fautes: any;
  public corners: any;
  public arrets: any;
  public touches: any;
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
  constructor(private resultdetailservice: ResultDetailService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.goals = new Array<any>();
    this.listcartonJaune = new Array<any>();
    this.cartonJaune1 = new Array<any>();
    this.cartonJaune2 = new Array<any>();
    this.route.params.subscribe((params) => {
      const team1 = params['team1'];
      const team2 = params['team2'];
      this.resultdetailservice.getMatch(team1,team2).subscribe(
        res => {
          this.percent = "%";
          this.data = res.response;
          this.matchDate = this.data.v[0].t;

          this.possession = this.data.st[0];
          this.tir = this.data.st[1];
          this.tirCadre = this.data.st[2];
          this.fautes = this.data.st[3];
          this.corners = this.data.st[4];
          this.arrets = this.data.st[5];
          this.touches = this.data.st[6];
          console.log(res.response.ev)
          for(this.i=0; this.i<res.response.ev.length; this.i++){
            if(res.response.ev[this.i].t =='goal' || res.response.ev[this.i].t == 'og'
              || res.response.ev[this.i].t == 'rc' || res.response.ev[this.i].t == 'pen'){
              this.goals.push(res.response.ev[this.i]);
            }
          }

          for(this.i=0; this.i<res.response.ev.length; this.i++){
            if(res.response.ev[this.i].t =='yc'){
              console.log(res.response.ev[this.i].s)
              if(res.response.ev[this.i].s == 1){
                this.cartonJaune1.push(res.response.ev[this.i])
              }else if(res.response.ev[this.i].s == 2){
                this.cartonJaune2.push(res.response.ev[this.i])
              }
            }
          }



            // console.log(this.cartonJaune1)
          //arret
          this.pourcentagearret1 =  String((this.arrets.v1 / (this.arrets.v1 + this.arrets.v2)) * 100);
          this.pourcentagearret1 =  this.pourcentagearret1.concat(this.percent.toString());
          this.pourcentagearret2 =  String((this.arrets.v2 / (this.arrets.v1 + this.arrets.v2)) * 100);
          this.pourcentagearret2 =  this.pourcentagearret2.concat(this.percent.toString());

          //fautes
          this.pourcentagefaute1 =  String((this.fautes.v1 / (this.fautes.v1 + this.fautes.v2)) * 100);
          this.pourcentagefaute1 =  this.pourcentagefaute1.concat(this.percent.toString());
          this.pourcentagefaute2 =  String((this.fautes.v2 / (this.fautes.v1 + this.fautes.v2)) * 100);
          this.pourcentagefaute2 =  this.pourcentagefaute2.concat(this.percent.toString());

          //corners
          this.pourcentagecorner1 =  String((this.corners.v1 / (this.corners.v1 + this.corners.v2)) * 100);
          this.pourcentagecorner1 =  this.pourcentagecorner1.concat(this.percent.toString());
          this.pourcentagecorner2 =  String((this.corners.v2 / (this.corners.v1 + this.corners.v2)) * 100);
          this.pourcentagecorner2 =  this.pourcentagecorner2.concat(this.percent.toString());

          //touches
          this.pourcentagetouche1 =  String((this.touches.v1 / (this.touches.v1 + this.touches.v2)) * 100);
          this.pourcentagetouche1 =  this.pourcentagetouche1.concat(this.percent.toString());
          this.pourcentagetouche2 =  String((this.touches.v2 / (this.touches.v1 + this.touches.v2)) * 100);
          this.pourcentagetouche2 =  this.pourcentagetouche2.concat(this.percent.toString());

          //carton jaunes
          this.pourcentagecarton1 =  String((this.cartonJaune1.length / (this.cartonJaune1.length + this.cartonJaune2.length)) * 100);
          this.pourcentagecarton1 =  this.pourcentagecarton1.concat(this.percent.toString());
          this.pourcentagecarton2 =  String((this.cartonJaune2.length / (this.cartonJaune1.length + this.cartonJaune2.length)) * 100);
          this.pourcentagecarton2 =  this.pourcentagecarton2.concat(this.percent.toString());
        }, () => {
          console.log("erreur d'appel a league service");
        });
    });
  }

}
