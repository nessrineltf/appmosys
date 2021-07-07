import { NgIf, NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicess/authentication.service';
import { MedecinService } from 'src/app/servicess/medecin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginFormSubmitted = false;
  isLoginFailed = false;
  loginForm : FormGroup;
  user ;
  constructor(private authServ: AuthenticationService, private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
  get lf() {
    return this.loginForm.controls;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const data = { 
      username: this.loginForm.value.username,
      password: this.loginForm.value.password

    };
    this.loginFormSubmitted = true;

    this.authServ.login(data).subscribe(res => {
      localStorage.setItem("Medecin","0")
      const  jwt =res['body']['accessToken']
      console.log(jwt); 
      this.authServ.saveToken(jwt);
      console.log(res['body']['accessToken']);
      this.authServ.getUser().subscribe(data=>{
        this.user=data;
        
      } );
      console.log('user,,,,,', this.user);
    
      this.router.navigate(['medecin'],this.user);

    }, error2 => {

// swalvt5araji msg alerte
      Swal.fire('erreur!', 'verifier votre données!');

    });



  }

}
