import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { Componente3Component } from './componente3/componente3.component';


@NgModule({
  declarations: [
    Componente1Component,
    Componente2Component,
    Componente3Component
  ],
  exports: [
    Componente1Component,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentesModule { }
