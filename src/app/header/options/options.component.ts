import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  @ViewChild(MatMenu) menu: MatMenu;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }


}
