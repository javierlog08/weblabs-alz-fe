
import { Component, Inject } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls:['login-form.component.scss']
  })
  export class LoginFormComponent{

    loginForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
      this.createForm();
    }

    ngOnInit() { }

    auth(): void {
      
      if(this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)) {
        this.router.navigate(['/home']);
      } else {
        this.setValidationErrors();
        

      }
    }

    createForm() {
      this.loginForm = this.formBuilder.group({
        username:[
          '', []
        ],
        password: [
          '', []
        ]
      });
    }

    setValidationErrors() {
      this.loginForm.controls.username.setErrors({
        "loginError": "Wrong username or password"
      });

      this.loginForm.controls.password.setErrors({
        "loginError": "Wrong username or password"
      });

      this.loginForm.controls.username.markAsTouched();
      this.loginForm.controls.password.markAsTouched();
    }
  }
  