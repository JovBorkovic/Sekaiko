import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ArtComponent } from './Components/art/art.component';
import { ForumComponent } from './Components/forum/forum.component';
import { SupportComponent } from './Components/support/support.component';
import { ForumthreadComponent } from './Components/forumthread/forumthread.component';
import { AccHomeComponent } from './Components/acc-home/acc-home.component';
import { UserComponent } from './Components/navbar/user/user.component';
import { UserImageComponent} from './Components/navbar/user/user-image/user-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ArtFilterComponent } from './components/art/art-filter/art-filter.component';
import { FormsComponent } from './components/forms/forms.component';
import { SignupComponent } from './components/forms/signup/signup.component';
import { LoginComponent } from './components/forms/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtComponent,
    ForumComponent,
    SupportComponent,
    ForumthreadComponent,
    AccHomeComponent,
    UserComponent,
    UserImageComponent,
    NavbarComponent,
    ParallaxComponent,
    ArtFilterComponent,
    FormsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
