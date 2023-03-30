import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhmHomeModule} from './components/ahm-home/ahm-home.module';
import { AhmLoginComponent } from './components/ahm-login/ahm-login.component';
import { AhmAdminModule } from './components/ahm-admin/ahm-admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AhmLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AhmAdminModule,
    AhmHomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
