import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AhmAdminServiceComponent } from './ahm-admin-service/ahm-admin-service.component';
import { AhmAdminComponent } from './ahm-admin.component';
import { AhmNewsComponent } from './ahm-news/ahm-news.component';
import { AhmPricingComponent } from './ahm-pricing/ahm-pricing.component';


const routes: Routes = [
  {
    path: 'admin', component: AhmAdminComponent,
    children: [
      { path: '', component: AhmNewsComponent, pathMatch: 'full' },
      { path: 'pricing', component: AhmPricingComponent},
      { path: 'services', component: AhmAdminServiceComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AhmAdminRoutingModule { }
