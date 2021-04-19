import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public deviceZoomLevel : number;

  constructor(public dialog: MatDialog) {
  }

 openLoginDialog() {
   this.dialog.open(LoginComponent);
 }
  
 openRegisterDialog() {
  this.dialog.open(RegisterComponent);
}

  ngOnInit(): void {
    
  }

}
