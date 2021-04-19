import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPostDetails } from '../../../interfaces/post';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  {
  post : IPostDetails; 
 constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
   console.log(data);
   this.post = data;
 }
  
}
