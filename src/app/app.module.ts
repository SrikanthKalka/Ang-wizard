import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormDataService } from './data/form-data.service';
import {AppRoutingModule} from './app-routing.module';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { AddressInfoComponent } from './addressinfo/addressinfo.component';
import { SummaryinfoComponent } from './summaryinfo/summaryinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserinfoComponent,
    CardinfoComponent,
    AddressInfoComponent,
    SummaryinfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
