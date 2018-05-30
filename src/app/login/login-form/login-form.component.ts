
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../shared/auth.service';


class Login {
  username: string;
  password: string;
}

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls:['login-form.component.css']
  })
  export class LoginFormComponent{

    model: Login = new Login();

    constructor(private authService: AuthService) {}

    ngOnInit() {
      
    }

    auth(): void {
      if(this.authService.login(this.model.username, this.model.password)) {
        console.log("logged");
      }
    }
  }
  