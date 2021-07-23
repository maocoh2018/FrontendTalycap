import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from 'src/app/componentes/componente1/componente1.component';
import { Componente2Component } from 'src/app/componentes/componente2/componente2.component';
import { Componente3Component } from 'src/app/componentes/componente3/componente3.component';


import { PagesComponent } from './pages.component';

const routes: Routes = [
    { 
      path:'inicio', 
      component:PagesComponent,
      children:[        
        { path:'componente1', component:Componente1Component },
        { path:'componente2', component:Componente2Component }, 
        { path:'componente3', component:Componente3Component },                
    ] 
},

];
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })
export class PagesRoutingModule { }
