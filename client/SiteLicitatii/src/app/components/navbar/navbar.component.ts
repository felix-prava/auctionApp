import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public deviceZoomLevel : number;
  private LoginDialogRef : MatDialogRef<LoginComponent>;
  private RegisterDialogRef : MatDialogRef<RegisterComponent>;
  public currentUserLoggedIn : boolean;

  constructor(public dialog: MatDialog,
              private router: Router,
              public authentication:AuthenticationService) {
    
             this.currentUserLoggedIn = false;
  }

  isLoggedIn() {
    this.authentication.currentUser.subscribe(res=>{
      this.currentUserLoggedIn = res ? true : false;
    })
  }

 openLoginDialog() {
   this.router.navigate(['login']);
 }
  
 openRegisterDialog() {
  this.router.navigate(['register']);
 
}


  ngOnInit(): void {
    this.isLoggedIn();

    this.router.events
    .pipe(
       filter((event) => event instanceof NavigationEnd),
       startWith(this.router)
    )
    .subscribe((event: NavigationEnd) => {
    
      if(event.url === "/login") {
        this. LoginDialogRef = this.dialog.open(LoginComponent);
        this.LoginDialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['']);
          this.isLoggedIn();

         
        })
      }
      if(event.url === "/register") {
        this.RegisterDialogRef = this.dialog.open(RegisterComponent);
        this.RegisterDialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['']);
        })
      }
    });
  }

}
