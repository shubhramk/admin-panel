import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule , HTTP_INTERCEPTORS} from "@angular/common/http";

import {SharedModule} from "./common/modules/shared/shared.module";
import {appRouting} from "./common/routing/app.routing";
import {LocalStorageService} from "./common/services/local-storage.service";
import {Broadcaster} from "./common/services/broadcaster.service";
import {HttpService} from "./common/services/http.service";
import {AuthService} from "./common/services/auth.service";
import {AuthGuard} from "./common/routing/auth.guard";
import {HttpInterceptorClass} from "./common/services/http.interceptor";


import { AppComponent } from './app.component';
import {LoginComponent} from "./modules/login/login.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    appRouting,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    LocalStorageService,
    Broadcaster,
    HttpService,
    AuthService,
    AuthGuard,
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorClass,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
