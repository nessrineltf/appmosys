import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient, private authSoc: AuthenticationsService) {
  }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/patient/all', {headers});
  }


}
