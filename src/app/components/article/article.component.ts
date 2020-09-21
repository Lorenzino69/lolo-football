import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private articleservice: ArticleService, private route: ActivatedRoute) {
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

          console.log(this.data);
            this.imagesUrl.push(this.data.medias[0].url);
            this.contentlegend.push(this.data.items[1].objet.title);
            this.imagesUrl = this.imagesUrl.map(function(x) {
              return x.replace('-{width}-{height}-{quality}/', '-624-416-75/');
            });

            for(this.i=0; this.i<this.data.items[3].objet.paragraphs.length; this.i++){
              this.content.push(this.data.items[3].objet.paragraphs[this.i]);
            }


            console.log(this.content)

        }, () => {
          console.log('erreur d\'appel a league service');
        });
    });
  }

}
