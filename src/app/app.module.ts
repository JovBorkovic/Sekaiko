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
import { ImageComponent } from './components/image/image.component';
import { NewestComponent } from './Components/image/newest/newest.component';
import { ModalsComponent } from './components/modals/modals.component';
import { UserComponent } from './Components/navbar/user/user.component';
import { UserImageComponent} from './Components/navbar/user/user-image/user-image.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ArtFilterComponent } from './components/art/art-filter/art-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtComponent,
    ForumComponent,
    SupportComponent,
    ForumthreadComponent,
    AccHomeComponent,
    NewestComponent,
    ImageComponent,
    ModalsComponent,
    UserComponent,
    UserImageComponent,
    NavbarComponent,
    ParallaxComponent,
    ArtFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
