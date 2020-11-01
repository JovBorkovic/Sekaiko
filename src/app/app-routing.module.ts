import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ArtComponent } from './Components/art/art.component';
import { ForumComponent } from './Components/forum/forum.component';
import { SupportComponent } from './Components/support/support.component';
import { ForumthreadComponent } from './Components/forumthread/forumthread.component';
import { AccHomeComponent } from './Components/acc-home/acc-home.component';

const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'forum', component: ForumComponent, children: [
    { path: 'forumthread', component: ForumthreadComponent }
   ] },
  { path: 'support', component: SupportComponent },
  { path: 'acc-home', component: AccHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
