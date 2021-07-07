import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
    // @ts-ignore
export class PatientService {

  constructor(private http: HttpClient, private authSoc: AuthenticationService) {
  }

  public getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authSoc.jwt});
    return this.http.get('http://localhost:8080/api/patient/all', {headers});
  }

  getByid(id) {
    return this.http.get('http://localhost:8080/api/patient/byid/' + id);
  }

  delete_patient(id) {
    return this.http.delete('http://localhost:8080/api/patient/remove/' + id);
  }

  update_patient(id, data) {
    return this.http.put('http://localhost:8080/api/patient/update/' + id, data);
  }

  add_patient( data) {
    // @ts-ignore
    return this.http.post('http://localhost:8080/api/patient/add' + patient);
  }
 
}
