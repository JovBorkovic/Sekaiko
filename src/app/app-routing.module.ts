import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ArtComponent } from './Components/art/art.component';
import { ForumComponent } from './Components/forum/forum.component';
import { SupportComponent } from './Components/support/support.component';
import { ForumthreadComponent } from './Components/forum-thread/forum-thread.component';
import { AccHomeComponent } from './Components/acc-home/acc-home.component';
import { AuthComponent } from './Components/auth/auth.component';

const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'forum', component: ForumComponent, children: [
    { path: 'forum-thread', component: ForumthreadComponent }
   ] },
  { path: 'support', component: SupportComponent },
  { path: 'acc-home/:id', component: AccHomeComponent},
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
