import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   username : string;
   password : string;
  loginForm: FormGroup;
  formGroup : FormGroup;
  displayError : boolean;
  constructor(private authenticationService:AuthenticationService,private formBuilder:FormBuilder,
              private router:Router,private dialogRef: MatDialogRef<LoginComponent>) { 

                this.displayError = false;
  }

  ngOnInit(): void {

  }

  getFormData() {
 
  }

  logIn() {
     this.authenticationService.login(this.username,this.password).subscribe(res=>{
       if(res) {
         this.router.navigate([""]);
         this.dialogRef.close();
       }
     });
  }
  

  onCancel() {
    this.dialogRef.close();
  }

}
