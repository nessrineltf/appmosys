import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class VilleService{

  constructor(private http: HttpClient ) { }

  public getall() {
    return this.http.get('http://localhost:8080/api/ville/all');
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
