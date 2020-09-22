import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class ChronoService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.apiKey = '9ebeb1f5074a5a0edbddc22b59b8f97a';
    this.language = 'fr-Fr';
    this.region = 'FR';
  }

  getChrono(): Observable<any> {
    return this.http.get(`https://dwh.lequipe.fr/api/edito/chrono?path=/Football/&context=page&version=1.1&platform=desktop`);
  }
}
