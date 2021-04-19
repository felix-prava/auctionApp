import { Component, OnDestroy,Inject } from '@angular/core';
import {dummy} from './dummy'
import {MatDialog} from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details/product-details.component';
import { IPostDetails } from '../../interfaces/post';
import { IFilters, IFilterOptions } from '../../interfaces/filters';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data : IPostDetails[] = dummy;
  public filters : IFilters = {
    focused_on: [
      {name : "Immediately available"},
      {name : "Highest win chance"}
    ],
    model : [
      {name : "Audi"},
      {name : "BMW" },
      {name : "Volkswagen"}
    ],
    fuel_type : [
      {name : "Petrol"},
      {name : "Diesel"},
      {name : "GPL"},
    ],
    transmission : [
      {name : "Manual"},
      {name : "Automatic"}
    ]
  }
  filter_options = {
    focused_on : new Set<string>(),
    model : new Set<string>(),
    fuel_type: new Set<string>(),
    transmission: new Set<string>()
  }


   constructor(public dialog: MatDialog,private router:Router) {
    this.router.navigate([], {queryParams: {key: ["hello","hey"]},queryParamsHandling: 'merge'});
   }

  openDialog(event:any) {
    console.log(event);
    this.dialog.open(ProductDetailsComponent, {
      data: this.findPost(event)
    
    });
  }

  findPost(vin:string) : IPostDetails {
    for(let post of this.data) {
      if(post.car_details.car_specifications.vin === vin) {
          return post;
      }
    }
    return undefined;
  }
 
  onFilterChange(option:string, key:string,checked_box:boolean) {
    if(checked_box == true) {
      this.filter_options[key].add(option);
    }
    else{
      this.filter_options[key].delete(option);

    }
    
  }

  updateQuerryParams() {
     
     
  }


  
}


