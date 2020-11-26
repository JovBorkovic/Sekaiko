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
import { PostCreateComponent } from './Components/post/post-create/post-create.component';
import { PostComponent } from './Components/post/post.component';

const route: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'post/:id', component: PostComponent},
  { path: 'forum', component: ForumComponent , canActivate: [AuthGuard], children: [
    { path: ':forumId', component: ForumthreadComponent }
   ] },
  { path: 'support', component: SupportComponent, canActivate: [AuthGuard] },
  { path: 'acc-home', children:[ 
    { path: ':id/:username', component: AccHomeComponent, canActivate: [AuthGuard]},
    { path: ':id/:username/create', component: PostCreateComponent, canActivate: [AuthGuard]}
  ]},
  { path: '**', redirectTo: '/home', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
