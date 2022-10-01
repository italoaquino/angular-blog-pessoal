import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path : '', component: PostsComponent
  },
  {
    path: 'cadastrar', component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
