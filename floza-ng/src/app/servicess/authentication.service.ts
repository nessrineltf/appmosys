import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class AuthenticationService {
    public jwt: string;
    public username: string;
    public roles: string[];

    constructor(private http: HttpClient) {
    }

    public login(data) {
        return this.http.post('http://localhost:8080/api/auth/signin', data, {observe: 'response'});
       // return this.http.post('http://localhost:8081' + '/login', data, {observe: 'response'});
    }

    public parseJWT() {

        const jwtHelper = new JwtHelperService();
        const objJWT = jwtHelper.decodeToken(this.jwt);
        this.username = objJWT.obj;
        this.roles = objJWT.roles;
    }

    public saveToken(jwt: string) {

        localStorage.setItem('token', jwt);
        this.jwt = jwt;
        this.parseJWT();
    }

    // public isAdmin() {
    //   return this.roles.indexOf("ADMIN") >= 0;
    // }
    //
    // public isUser() {
    //   return this.roles.indexOf("USER") >= 0;
    // }
    //
    // public isAuthenticated() {
    //   return this.roles && (this.isAdmin() || this.isUser());
    // }


    public loadToken() {
        this.jwt = localStorage.getItem('token');
        this.parseJWT();
    }

    public logout() {
        localStorage.removeItem('token');
        this.initParams();
    }

    public initParams() {
        this.jwt = undefined;
        this.username = undefined;
        this.roles = undefined;
    }

    getprofile() {
        //permet d'affficher le user courant
        const headers = new HttpHeaders({'authorization': 'Bearer ' + this.jwt});

        return this.http.get('http://localhost:8080/api/admin/users', {headers: headers});
    }
    getUser() {
        //permet d'affficher le user courant
        const headers = new HttpHeaders({'authorization': 'Bearer ' + this.jwt});

        return this.http.get('http://localhost:8080/api/auth/info', {headers: headers});
    }
    // isMedecin() {
    //     return this.roles.indexOf('Medecin') >= 0 ;
    //   }
}
