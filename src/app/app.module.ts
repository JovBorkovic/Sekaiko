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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtComponent,
    ForumComponent,
    SupportComponent,
    ForumthreadComponent,
    AccHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
