import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PharmacieService{

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/pharmacie/all', {headers});
  }

  getByid(id){
    return this.http.get('http://localhost:8080/api/pharmacie/byid/'+id);
  }
  deletePharmacie(id){
    return this.http.delete('http://localhost:8080/api/pharmacie/delete/'+id);
  }
  updatePharmacie(id,idv,data){
    return this.http.put('http://localhost:8080/api/pharmacie/edit/'+id+'/'+idv,data);
  }

    addPharmacie( id: any,data){
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/pharmacie/add/'+id, data);
  }
}
