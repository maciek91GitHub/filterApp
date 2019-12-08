import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicViewComponent } from './main/basic-view/basic-view.component';


const appRoutes: Routes = [
  { path: '**', component: BasicViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
