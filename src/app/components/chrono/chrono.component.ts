import { Component, OnInit } from '@angular/core';
import {ChronoService} from '../../services/chrono.service';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {
  private data: any;
  private j: any;
  public chrono: Array<any>;
  public type1: any;
  public type2foot: any;

  constructor(private chronoservice: ChronoService) { }

  ngOnInit(): void {
    this.chrono = new Array<any>();
    this.chronoservice.getChrono()
      .subscribe(
        res => {

          this.data = res.content.feed.items;


          for(this.j=1; this.j< res.content.feed.items.length; this.j++) {
            if(res.content.feed.items[this.j].__type == "chrono_widget"){
              this.chrono.push(res.content.feed.items[this.j])
            }

          }
          console.log(this.chrono)
        }, () => {
          console.log("erreur d'appel a league service");
        });
  }

}
