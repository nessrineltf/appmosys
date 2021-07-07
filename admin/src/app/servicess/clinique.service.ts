import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CliniqueService{

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/clinique/all', {headers});
  }


  deleteClinique(id){
    return this.http.delete('http://localhost:8080/api/clinique/delete/'+id);
  }

  addClinique(id,data){
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/clinique/add/'+id,data);
  }
}
