import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { appInterceptorProvider } from './app.interceptor';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { API_ERROR } from './shared/constants';
import { BehaviorSubject } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule
   
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }