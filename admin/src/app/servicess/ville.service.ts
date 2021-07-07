import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class VilleService{

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/ville/all', {headers});
  }

  getByid(id){
    return this.http.get('http://localhost:8080/api/ville/byid/'+id);
  }
  deleteville(id){
    return this.http.delete('http://localhost:8080/api/ville/delete/'+id);
  }
  updateville(id,data){
    return this.http.put('http://localhost:8080/api/ville/edit/'+id,data);
  }
  addville(data){
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/ville/add',data);
  }
}
