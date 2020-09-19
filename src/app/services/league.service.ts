import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LeagueService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '9ebeb1f5074a5a0edbddc22b59b8f97a';
    this.language = 'fr-Fr';
    this.region = 'FR';
  }

  getLigue(id: number): Observable<any> {
    return this.http.get(`https://www.scorebat.com/api/competition/${id}`);
  }

  getTVAiringToday(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}&language=${this.language}`);
  }



}
