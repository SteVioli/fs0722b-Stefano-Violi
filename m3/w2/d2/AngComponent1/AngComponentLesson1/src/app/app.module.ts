import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//SCRIVERE SEMPRE import  { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // AGGIUNGERE FORMSMODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
