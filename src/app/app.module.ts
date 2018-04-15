import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import {Component1Service} from './component1.service';



@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [Component1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
