import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages/pages.routing';

const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    
  ],
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
