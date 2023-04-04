import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import { AhmServicesComponent } from './ahm-services/ahm-services.component';
import { AhmAboutComponent } from './ahm-about/ahm-about.component';
import { AhmWhyUsComponent } from './ahm-why-us/ahm-why-us.component';
import { AhmPortfolioComponent } from './ahm-portfolio/ahm-portfolio.component';
import { AhmPricingComponent } from './ahm-pricing/ahm-pricing.component';
import { AhmTeamComponent } from './ahm-team/ahm-team.component';
import { AhmContactComponent } from './ahm-contact/ahm-contact.component';
import { AhmHomeComponent } from './ahm-home.component';




@NgModule({
  declarations: [
    AhmServicesComponent,
    AhmHomeComponent,
    AhmAboutComponent,
    AhmWhyUsComponent,
    AhmPortfolioComponent,
    AhmPricingComponent,
    AhmTeamComponent,
    AhmContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 3000
    })
  ]
})
export class AhmHomeModule { }
