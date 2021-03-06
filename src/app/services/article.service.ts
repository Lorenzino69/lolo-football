import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class ArticleService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.apiKey = '9ebeb1f5074a5a0edbddc22b59b8f97a';
    this.language = 'fr-Fr';
    this.region = 'FR';
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(`https://dwh.lequipe.fr/api/v2/efr/news/${id}`);
  }




}
