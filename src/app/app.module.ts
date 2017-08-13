import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SHARED_SERVICES, AuthInterceptorService } from './shared/services';
import { SHARED_COMPONENTS } from './shared/components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  },
    SHARED_SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
