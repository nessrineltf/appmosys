import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ParaPharmacieService{

  constructor(private http: HttpClient , private authSoc: AuthenticationService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/paraPharmacie/all');
  }
  
}
