import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NextComponent } from './next/next.component';

const routes: Routes = [
  { path: "", redirectTo: "/first", pathMatch: "full" },
  { path: "first", component: FirstComponent },
  { path: "next/:name", component: NextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
