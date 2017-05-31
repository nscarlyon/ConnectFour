import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ConnectFourComponent}  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ConnectFourComponent ],
  bootstrap:    [ ConnectFourComponent ]
})
export class AppModule { }
