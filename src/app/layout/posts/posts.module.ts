import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { FormComponent } from './form/form.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PostsComponent, FormComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatButtonModule
  ]
})
export class PostsModule { }
