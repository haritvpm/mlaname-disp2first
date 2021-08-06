
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertComponent } from './convert/convert.component';


const routes: Routes = [
  { path: '', component: ConvertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
