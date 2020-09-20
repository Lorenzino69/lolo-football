import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class ActuService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.apiKey = '9ebeb1f5074a5a0edbddc22b59b8f97a';
    this.language = 'fr-Fr';
    this.region = 'FR';
  }

  getActu(): Observable<any> {
    return this.http.get(`https://dwh.lequipe.fr/api/home/classic?path=/Football/&version=1.1&platform=desktop`);
  }




}
