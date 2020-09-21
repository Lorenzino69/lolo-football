import {Component, OnInit} from '@angular/core';
import {ActuService} from '../../services/actu.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {

  private i: number;
  public data: Array<any>;
  public images: Array<any>;
  private error: HttpErrorResponse;

  constructor(private actuservice: ActuService) { }

  ngOnInit(): void {

this.data =new Array<any>();
    this.actuservice.getActu()
      .subscribe(
      res => {
        for(this.i=0; this.i< res.content.feed.items.length; this.i++){
          if(res.content.feed.items[this.i].content !== undefined){
            this.data.push(res.content.feed.items[this.i].content);

          }
        }


      }, () => {
        console.log("erreur d'appel a league service");
      });
  }


}
