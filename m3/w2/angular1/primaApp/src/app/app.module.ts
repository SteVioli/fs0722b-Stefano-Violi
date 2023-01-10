import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { SecondoComponentComponent } from './secondo-component/secondo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    SecondoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
