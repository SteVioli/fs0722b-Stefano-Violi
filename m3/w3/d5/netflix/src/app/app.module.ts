import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './components/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthGuard } from './components/auth/auth.guard';
// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
// import { HomeComponent } from './components/home/home.component';
// import { ActivePostComponent } from './components/active-post/active-post.component';
// import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
// import { PostsComponent } from './components/posts/posts.component';
// import { UppercasePipe } from './pipe/uppercase.pipe';
// import { EvidenziaDirective } from './direttive/evidenzia.directive';
// import { UsersPageComponent } from './components/users-page/users-page.component';
// import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { MoviesComponent } from './components/main/movies/movies.component';
import { ProfileComponent } from './components/main/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent,
    // HomeComponent,
    // ActivePostComponent,
    // InactivePostComponent,
    // PostsComponent,
    // UppercasePipe,
    // EvidenziaDirective,
    // UsersPageComponent,
    // UserComponent
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    MoviesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'registrati',
            component: SignupComponent
        },
        {
            path: 'movies',
            component: MoviesComponent
        },
        {
            path: 'profile',
            component: ProfileComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
