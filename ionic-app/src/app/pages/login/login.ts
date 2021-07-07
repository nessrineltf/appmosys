import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { UserData } from '../../providers/user-data';


import { AuthenticationService } from '../../providers/authentication.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login= { username: '', password: '' };
  submitted = false;
  // loginFormSubmitted = false;
  // isLoginFailed = false;
  // loginForm : FormGroup;
  user ;
  constructor(
    private authServ: AuthenticationService, private router: Router
  ) { }
  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', [Validators.required]]
    // });
  }
//   get lf() {
//     return this.loginForm.controls;
//   }
//   onSubmit() {
//     if (this.loginForm.invalid) {
//       return;
//     }
//     const data = { 
//       username: this.loginForm.value.username,
//       password: this.loginForm.value.password

//     };
//     this.loginFormSubmitted = true;

//     this.authServ.login(data).subscribe(res => {

//       const  jwt =res['body']['accessToken']
//       console.log(jwt); 
//       this.authServ.saveToken(jwt);
//       console.log(res['body']['accessToken']);
//       this.authServ.getUser().subscribe(data=>{
//         this.user=data;
        
//       } );
//       console.log('user,,,,,', this.user);
    
//       this.router.navigate(['medecin']);

//     }, error2 => {

// // swalvt5araji msg alerte
//       Swal.fire('erreur!', 'verifier votre données!');

//     });



//   }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.authServ.login(this.login);
      // this.router.navigateByUrl('/app/tabs/schedule');
      this.authServ.login(this.login).subscribe(res => {
        localStorage.setItem("Patient","1")
        const  jwt =res['body']['accessToken']
        console.log(jwt); 
        this.authServ.saveToken(jwt);
        console.log(res['body']['accessToken']);
        this.authServ.getUser().subscribe(data=>{
          // console.log(data);
          this.user=data;
          console.log('user', this.user);
          
          
        } );
        
        let navigationExtras: NavigationExtras = {
          queryParams: {
            special: JSON.stringify(this.user)
          }
        };
        this.router.navigate(['account'], navigationExtras);
       
  
      }, error2 => {
  
  // swalvt5araji msg alerte
        Swal.fire('erreur!', 'verifier votre données!');
  
      });
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
