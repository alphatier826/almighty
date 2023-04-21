import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';


import { AhmAdminComponent } from './ahm-admin.component';
import { AhmNewsComponent } from './ahm-news/ahm-news.component';
import { AhmAdminRoutingModule } from './ahm-admin-routing.module';
import { AhmPricingComponent } from './ahm-pricing/ahm-pricing.component';
import { ButtonRendererComponent } from './ahm-news/button-renderer.component';
import { AhmAdminServiceComponent } from './ahm-admin-service/ahm-admin-service.component';




@NgModule({
  declarations: [AhmAdminComponent, AhmNewsComponent, AhmPricingComponent, ButtonRendererComponent, AhmAdminServiceComponent],
  imports: [
    CommonModule,
    AhmAdminRoutingModule,
    AgGridModule,
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
})
export class AhmAdminModule { }
