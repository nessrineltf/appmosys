import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
    // @ts-ignore
export class DossierMedicaleService {

  constructor(private http: HttpClient, private authSoc: AuthenticationService) {
  }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/dossierMedical/all', {headers});
  }

  getByid(id) {
    return this.http.get('http://localhost:8080/api/dossierMedical/byid/' + id);
  }

  delete_dm(id) {
    return this.http.delete('http://localhost:8080/api/dossierMedical/delete/' + id);
  }

  update_dm(id, data) {
    return this.http.put('http://localhost:8080/api/dossierMedical/edit/' + id, data);
  }

  add_dm( data) {
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/dossierMedical/add' + id, patient);
  }
 
}
