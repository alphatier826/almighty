import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AhmAdminComponent } from './ahm-admin.component';
import { AhmNewsComponent } from './ahm-news/ahm-news.component';
import { AhmPricingComponent } from './ahm-pricing/ahm-pricing.component';


const routes: Routes = [
  {
    path: 'admin', component: AhmAdminComponent,
    children: [
      { path: '', component: AhmNewsComponent, pathMatch: 'full' },
      { path: 'pricing', component: AhmPricingComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AhmAdminRoutingModule { }
