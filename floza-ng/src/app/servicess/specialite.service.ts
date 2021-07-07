import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService{

  constructor(private http: HttpClient) { }

  public getall() {

    return this.http.get('http://localhost:8080/api/specialite/all');
  }

  getSpecialitebyid(id){
    return this.http.get('http://localhost:8080/api/specialite/Byid/'+id);
  }
  deleteSpecialite(id){
    return this.http.delete('http://localhost:8080/api/specialite/delete/'+id)
  }


}
