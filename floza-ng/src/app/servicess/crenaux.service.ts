import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class CrenauxRDVService {

  constructor(private http: HttpClient ) { }

  public getall() {

    return this.http.get('http://localhost:8080/api/crenauxrdv/all');
  }

  deleteCrenaux(id){
    return this.http.delete('http://localhost:8080/api/crenauxrdv/delete/'+id);
  }
  updateCrenaux(id,idv,data){
    return this.http.put('http://localhost:8080/api/crenauxrdv/edit/'+id+'/'+idv,data);
  }
  addCrenaux(id,data){
    return this.http.post('http://localhost:8080/api/crenauxrdv/add/'+id,data);
  }
}
