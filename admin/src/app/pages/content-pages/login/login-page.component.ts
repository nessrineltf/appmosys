import { Component, ViewChild } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import {AuthenticationsService} from '../../../servicess/authentification.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  loginFormSubmitted = false;
  isLoginFailed = false;

  loginForm : FormGroup;

  constructor(private authServ: AuthenticationsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
// ta9ra donne mta3 form group
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

      const  jwt =res['body']['accessToken']
      console.log(jwt);
      this.authServ.saveToken(jwt);
      console.log(res['body']['accessToken']);
      this.router.navigate(['page']);

    }, error2 => {

// swalvt5araji msg alerte
      Swal.fire('erreur!', 'verifier votre données!');

    });



  }
}
