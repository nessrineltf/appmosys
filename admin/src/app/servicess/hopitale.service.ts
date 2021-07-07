import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class HopitaleService{

  constructor(private http: HttpClient , private authSoc: AuthenticationsService) { }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/hopitale/all', {headers});
  }


  deleteHop(id){
    return this.http.delete('http://localhost:8080/api/hopitale/delete/'+id);
  }
  updateHop(id,idv,data){
    return this.http.put('http://localhost:8080/api/hopitale/edit/'+id+'/'+idv,data);
  }
  addHop(id,data){
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/hopitale/add/'+id,data);
  }
}
