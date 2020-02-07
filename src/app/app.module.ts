import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Service} from './sevice'
import { AppComponent } from './app.component';
import { Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
