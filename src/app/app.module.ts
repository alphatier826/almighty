import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhmServicesComponent } from './components/ahm-services/ahm-services.component';
import { AhmAboutComponent } from './components/ahm-about/ahm-about.component';
import { AhmWhyUsComponent } from './components/ahm-why-us/ahm-why-us.component';
import { AhmPortfolioComponent } from './components/ahm-portfolio/ahm-portfolio.component';
import { AhmPricingComponent } from './components/ahm-pricing/ahm-pricing.component';
import { AhmTeamComponent } from './components/ahm-team/ahm-team.component';
import { AhmContactComponent } from './components/ahm-contact/ahm-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AhmServicesComponent,
    AhmAboutComponent,
    AhmWhyUsComponent,
    AhmPortfolioComponent,
    AhmPricingComponent,
    AhmTeamComponent,
    AhmContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
