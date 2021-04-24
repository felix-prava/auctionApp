import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 email: string;
 password : string;
 repeat_password : string;
 existing_email : boolean;
 passwords_dont_match : boolean;
  constructor(private authenticationService:AuthenticationService,
              private dialogRef: MatDialogRef<RegisterComponent>) { 
    this.existing_email = false;
    this.passwords_dont_match = false;
  }

  ngOnInit(): void {

  }

  onCancel() {
    this.dialogRef.close();
  }

  onRegister() {
   
    if(this.password !== this.repeat_password) {
      this.passwords_dont_match = true;
      return;
    }
    //passwords needs to be hashed.
    console.log(this.email,this.password);
    this.authenticationService.register(this.email,this.password).subscribe(res => {
      this.onCancel();
    })
  }

}
