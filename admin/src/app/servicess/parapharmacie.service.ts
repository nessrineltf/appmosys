import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ParaPharmacieService{

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/parapharmacie/all', {headers});
  }

  getByid(id){
    return this.http.get('http://localhost:8080/api/parapharmacie/byid/'+id);
  }
  deletePara(id){
    return this.http.delete('http://localhost:8080/api/parapharmacie/delete/'+id);
  }
  updatePara(id,idv,data){
    return this.http.put('http://localhost:8080/api/parapharmacie/edit/'+id+'/'+idv,data);
  }
  addPara(id,data){
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/parapharmacie/add/'+id,data);
  }
}
