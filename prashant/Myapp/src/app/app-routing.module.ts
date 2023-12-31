import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'' ,redirectTo:'loginPage',pathMatch:'full'},
  {path:'loginPage', component:LoginPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'dashboard' ,component: DashboardComponent},
  {path:'**', component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
