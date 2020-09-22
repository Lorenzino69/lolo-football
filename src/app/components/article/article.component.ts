import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  data: any;
  private i: number;
  public imagesUrl: Array<any>;
  public contentlegend: Array<any>;
  public content: Array<any>;
  metas: any;
  testImage: any;

  constructor(private articleservice: ArticleService, private route: ActivatedRoute,private _location: Location) {
  }

  ngOnInit(): void {
    this.imagesUrl = new Array<any>();
    this.contentlegend = new Array<any>();
    this.content = new Array<any>();
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.articleservice.getArticle(id).subscribe(
        res => {
          this.data = res;
          this.metas = res.metas;
          console.log(this.data)
          this.testImage = this.data.medias[0];
          if(this.data.medias[0].url !==undefined){
            this.imagesUrl.push(this.data.medias[0].url);
            this.imagesUrl = this.imagesUrl.map(function(x) {
              return x.replace('-{width}-{height}-{quality}/', '-624-416-75/');
            });
          }else if (this.data.medias[0].iframe){
            this.imagesUrl.push(this.data.medias[0].iframe);
          }

            this.contentlegend.push(this.data.items[1].objet.title);





            if(this.data.items[3].objet.paragraphs ==undefined){
              for(this.i=0; this.i<this.data.items[2].objet.paragraphs.length; this.i++){
                this.content.push(this.data.items[2].objet.paragraphs[this.i]);
              }
            }else{
              for(this.i=0; this.i<this.data.items[3].objet.paragraphs.length; this.i++){
                this.content.push(this.data.items[3].objet.paragraphs[this.i]);
              }
            }

        }, () => {
          console.log('erreur d\'appel a league service');
        });
    });
  }

  backClick() {
    this._location.back();
  }

}
