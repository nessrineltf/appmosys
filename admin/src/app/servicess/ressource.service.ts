import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    return this.http.get('http://localhost:8080/api/ressourcemateriel/all');
  }

}
