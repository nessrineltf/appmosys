import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationsService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})

export class MedecinService {

  constructor(private http: HttpClient, private authSoc: AuthenticationsService) {
  }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/medecin/all', {headers});
  }

  getByid(id) {
    return this.http.get('http://localhost:8080/api/medecin/byid/' + id);
  }

  delete_medecin(id) {
    return this.http.delete('http://localhost:8080/api/medecin/delete/' + id);
  }

  update_medecin(id, data) {
    return this.http.put('http://localhost:8080/api/medecin/edit/' + id, data);
  }

  add_medecin( data) {
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/medecin/add' + id, pharmacie);
  }
}
