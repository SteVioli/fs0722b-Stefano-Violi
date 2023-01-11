import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //importo il form module di angular per utilizzare i suoi form
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { EtaComponent } from './components/eta/eta.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    EtaComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //importo il form module di angular per utilizzare i suoi form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
