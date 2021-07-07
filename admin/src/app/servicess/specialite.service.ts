import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService{

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/specialite/all', {headers});
  }

  getSpecialitebyid(id){
    return this.http.get('http://localhost:8080/api/specialite/Byid/'+id);
  }
  deleteSpecialite(id){
    return this.http.delete('http://localhost:8080/api/specialite/delete/'+id)
  }
 addspecialte(data){
   return this.http.post('http://localhost:8080/api/specialite/add',data)
 }
  updatespecialite(id,data){
  return this.http.put('http://localhost:8080/api/specialite/edit/'+id,data)
  }
}
