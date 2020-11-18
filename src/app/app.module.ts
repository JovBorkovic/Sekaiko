import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './Components/navbar/nav-bar.module';
import { AuthService } from './Components/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostsModule } from './Components/post/posts.module';
import { AuthInterceptor } from './Components/auth/auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParallaxComponent } from './Components/parallax/parallax.component';
import { HomeComponent } from './Components/home/home.component';
import { ArtFilterComponent } from './Components/art/art-filter/art-filter.component';
import { AccHomeComponent } from './Components/acc-home/acc-home.component';
import { AuthComponent } from './Components/auth/auth.component';
import { ArtComponent } from './Components/art/art.component';
import { ForumComponent } from './Components/forum/forum.component';
import { ForumthreadComponent } from './Components/forum-thread/forum-thread.component';
import { SupportComponent } from './Components/support/support.component';
import { NavbarComponent } from './Components/navbar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    HomeComponent,
    ArtFilterComponent,
    AccHomeComponent,
    AuthComponent,
    ArtComponent,
    ForumComponent,
    ForumthreadComponent,
    SupportComponent,
    NavbarComponent
  ],
  imports: [
    NavbarModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    PostsModule,
    AngularMaterialModule,
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
