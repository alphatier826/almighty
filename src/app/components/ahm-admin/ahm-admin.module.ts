import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhmAdminComponent } from './ahm-admin.component';
import { AhmNewsComponent } from './ahm-news/ahm-news.component';
import { AhmAdminRoutingModule } from './ahm-admin-routing.module';
import { AhmPricingComponent } from './ahm-pricing/ahm-pricing.component';




@NgModule({
  declarations: [AhmAdminComponent, AhmNewsComponent, AhmPricingComponent],
  imports: [
    CommonModule,
    AhmAdminRoutingModule
  ]
})
export class AhmAdminModule { }
