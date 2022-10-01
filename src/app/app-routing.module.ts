import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
