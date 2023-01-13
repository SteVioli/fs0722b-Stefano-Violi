import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CompletedComponent } from './components/completed/completed.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { Route } from '@angular/router';

const routes:Route[]=[
    {
      path:'',
      component:AddTasksComponent
    },
    {
      path:'taskCompletate',
      component:CompletedComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    CompletedComponent,
    NavbarComponent,
    AddTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
