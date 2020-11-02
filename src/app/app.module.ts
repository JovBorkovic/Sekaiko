import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ArtComponent } from './Components/art/art.component';
import { ForumComponent } from './Components/forum/forum.component';
import { SupportComponent } from './Components/support/support.component';
import { ForumthreadComponent } from './Components/forum-thread/forum-thread.component';
import { AccHomeComponent } from './Components/acc-home/acc-home.component';
import { UserComponent } from './Components/navbar/user/user.component';
import { UserImageComponent} from './Components/navbar/user/user-image/user-image.component';
import { NavbarComponent } from './Components/navbar/nav-bar.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ArtFilterComponent } from './components/art/art-filter/art-filter.component';
import { AuthComponent } from './Components/auth/auth.component';
import { LoadingSpinnerComponent } from './Components/shared/loading-spinner/loading-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Components/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Components/auth/auth-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
