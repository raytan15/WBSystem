import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ConsumerPageComponent } from './consumer-page/consumer-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: 'transaction', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'consumer', component: ConsumerPageComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
