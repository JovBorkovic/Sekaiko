import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AuthService } from '../auth/auth.service';
import { UserImageComponent } from './user/user-image/user-image.component';
import { UserComponent } from './user/user.component';


@NgModule({
declarations: [
    UserComponent,
    UserImageComponent,
    ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        RouterModule,
        FormsModule,
    ],
  exports: [
    UserComponent,
    UserImageComponent
],
  providers: [AuthService]
})
export class NavbarModule { }
