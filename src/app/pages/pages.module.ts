import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentesModule,
    MaterialModule
  ],
  exports:[    
    PagesComponent
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
