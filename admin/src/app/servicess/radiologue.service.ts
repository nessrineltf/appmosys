import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class RadioService{

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/radiologue/all', {headers});
  }

  deleteRadio(id){
    return this.http.delete('http://localhost:8080/api/radiologue/delete/'+id);
  }
  updateRadio(id,idv,data){
    return this.http.put('http://localhost:8080/api/radiologue/edit/'+id+'/'+idv,data);
  }
  addRadio(id,data){
    return this.http.post('http://localhost:8080/api/radiologue/add/'+id,data);
  }
}
