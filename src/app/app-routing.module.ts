import { WeatherComponent } from './components/weather/weather.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { PlatsComponent } from './components/plats/plats.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminComponent},
  {path:'plats', component:PlatsComponent},
  {path:'add-menu', component:AddMenuComponent},
  {path:'weather', component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
