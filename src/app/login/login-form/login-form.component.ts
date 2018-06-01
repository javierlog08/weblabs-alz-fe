
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';


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

    model: Login = new Login();

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() { }

    auth(): void {
      if(this.authService.login(this.model.username, this.model.password)) {
        this.router.navigate(['/home']);
      }
    }
  }
  