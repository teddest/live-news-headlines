import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';

import { SHARED_SERVICES, DefaultRequestOptions } from './shared/services';
import { SHARED_COMPONENTS } from './shared/components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SHARED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    { provide: RequestOptions, useClass: DefaultRequestOptions },
    SHARED_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
