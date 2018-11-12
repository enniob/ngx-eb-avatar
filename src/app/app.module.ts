import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxEbAvatarModule } from 'ngx-eb-avatar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEbAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
