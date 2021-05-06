import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = ''; // http://localhost:3002/api/vi
  constructor(
    private http: Http
  ) {
    this.apiURL = environment.apiURL;
  }

  testing() {
    console.log('from http service testing...');
  }

  // get('car');
  async get(path: string) {
    const resp = await this.http.get(this.apiURL + path, this.headers).toPromise();
    console.log('resp from http service get() res: ', resp.json());
    return resp.json();
  }

  // post('car,' {make: 'Nissan', model: '350z'});
  async post(path: string, payload: any) {
    const resp = await this.http.post(this.apiURL + path, payload, this.headers).toPromise();
    console.log('from http service post() resp: ', resp.json());
    return resp.json();
  }

  put() {

  }

  delete() {

  }

  get headers() {
    const token = localStorage.getItem('id_token') || null;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return {
      headers,
      withCredentials: true
    };
  }
}
