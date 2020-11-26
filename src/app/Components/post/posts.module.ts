import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AuthService } from '../auth/auth.service';
import { PostCreateComponent } from "./post-create/post-create.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostComponent } from "./post.component";
import { PostsService } from './posts.service';

@NgModule({
    declarations: [
        PostListComponent,
        PostCreateComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        PostListComponent,
        PostCreateComponent,
        PostComponent
    ]
    ,
    providers:[PostsService, AuthService]
}) export class PostsModule {}