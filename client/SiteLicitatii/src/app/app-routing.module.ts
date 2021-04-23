import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = 
[
  {
    path : "",
    component : HomeComponent
  },
  {
    path: "profile",
    component : ProfileComponent
  },
  {
    path: "login",
    data : { urlPath : 'login'},
    component : HomeComponent
  },
  {
    path:"register",
    component:HomeComponent
  },
  {
    path: "profile",
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
