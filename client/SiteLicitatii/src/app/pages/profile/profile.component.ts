import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  list;
  constructor() { 
    this.list = 
    [
      {name :'India',checked : false},
      {name :'US',checked : false},
      {name :'China',checked : false},
      {name :'France',checked : false}
    ] }

  ngOnInit(): void {
  }

}
