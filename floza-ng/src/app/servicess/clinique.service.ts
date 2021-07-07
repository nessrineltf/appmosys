import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class CliniqueService{

    constructor(private http: HttpClient) { }

    public getall() {

        return this.http.get('http://localhost:8080/api/clinique/all')
    }


}
