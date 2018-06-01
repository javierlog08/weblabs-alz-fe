
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


class Login {
  username: string;
  password: string;
}

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls:['login-form.component.scss']
  })
  export class LoginFormComponent{

    loginModel: Login = new Login();

    loginForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
      this.createForm();
    }

    ngOnInit() { }

    auth(): void {
      if(this.authService.login(this.loginModel.username, this.loginModel.password)) {
        this.router.navigate(['/home']);
      }
    }

    createForm() {
      this.loginForm = this.formBuilder.group({
        username:[
          this.loginModel.username, [Validators.required, this.authService.loginValidator()]
        ],
        password: [
          this.loginModel.password, [Validators.required,this.authService.loginValidator()]
        ]
      });

    }
  }
  