import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class ResultDetailService {

  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.apiKey = '9ebeb1f5074a5a0edbddc22b59b8f97a';
    this.language = 'fr-Fr';
    this.region = 'FR';
  }

  getMatch(team1: string, team2:string): Observable<any> {
    return this.http.get(`https://www.scorebat.com/api/feed/match/${team1}/${team2}`);
  }
}
