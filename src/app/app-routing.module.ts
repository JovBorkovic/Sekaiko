import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ArtComponent } from './Components/art/art.component';
import { ForumComponent } from './Components/forum/forum.component';
import { SupportComponent } from './Components/support/support.component';
import { ForumthreadComponent } from './Components/forum-thread/forum-thread.component';
import { AccHomeComponent } from './Components/acc-home/acc-home.component';
import { AuthGuard } from './Components/auth/auth.guard';
import { AuthComponent } from './Components/auth/auth.component';

const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'forum', component: ForumComponent , canActivate: [AuthGuard], children: [
    { path: 'forum-thread', component: ForumthreadComponent }
   ] },
  { path: 'support', component: SupportComponent, canActivate: [AuthGuard] },
  { path: 'acc-home', children:[ 
    { path: 'acc-home/:username', component: AccHomeComponent, canActivate: [AuthGuard]},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
