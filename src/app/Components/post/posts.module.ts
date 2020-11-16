import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AuthService } from '../auth/auth.service';
import { PostCreateComponent } from "./post-create/post-create.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostsService } from './posts.service';

@NgModule({
    declarations: [
        PostListComponent,
        PostCreateComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        RouterModule
    ],
    exports: [
        PostListComponent,
        PostCreateComponent
    ]
    ,
    providers:[PostsService, AuthService]
}) export class PostsModule {}