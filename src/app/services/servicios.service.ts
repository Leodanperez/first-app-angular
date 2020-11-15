import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private api:string = Api.url;

  constructor( private http: HttpClient ) { }

  getData() {
    return this.http.get(`${this.api}services.json`);
  }
  
}
