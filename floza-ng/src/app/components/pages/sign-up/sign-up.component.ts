import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicess/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginFormSubmitted = false;
  isLoginFailed = false;
  registerForm : FormGroup;
  constructor(private authServ: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      first_name:['',[Validators.required]],
      last_name:['', [Validators.required]],
      typeuser:['',[Validators.required]],
      email:['',[Validators.required]]
    });
  }

}
