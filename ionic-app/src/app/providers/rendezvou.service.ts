import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http: HttpClient) { }

  public getall() {

    return this.http.get('http://localhost:8080/api/rendezvous/all');
  }

  getbyid(id) {
    return this.http.get('http://localhost:8080/api/rendervous/Byid/' + id);
  }
  deleteRDV(id) {
    return this.http.delete('http://localhost:8080/api/rendervous/delete/' + id);
  }


}
