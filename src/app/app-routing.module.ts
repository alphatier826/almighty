import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AhmAdminRoutingModule } from './components/ahm-admin/ahm-admin-routing.module';
import { AhmAdminComponent } from './components/ahm-admin/ahm-admin.component';
import { AhmHomeComponent } from './components/ahm-home/ahm-home.component';
import { AhmLoginComponent } from './components/ahm-login/ahm-login.component';


const routes: Routes = [
  {path:'', component: AhmHomeComponent},
  {path:'login', component: AhmLoginComponent},
  {path:'admin', component: AhmAdminComponent}
];

@NgModule({
  imports: [
    AhmAdminRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
