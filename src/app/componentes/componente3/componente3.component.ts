import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';

export interface PeriodicElement {
  name: string;
  position: number;
  direccion: string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mauricio', direccion: 'Calle 75', fecha: '25/05/2021'},
  {position: 2, name: 'Carlos', direccion: 'Calle 80', fecha: '25/05/2021'},
  {position: 3, name: 'Lithium', direccion: 'Calle 90', fecha: '25/05/2021'},  
];



@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  displayedColumns: string[] = ['idBook', 'title', 'description', 'pageCount', 'excerpt', 'publishDate', 'autor'];
  dataSource = ELEMENT_DATA;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.obtenerLibros();

  }

  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.obtenerLibros();
    }

    this.commonService.obtenerLibro(termino).pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');        
      }
      )).subscribe(resp => {        
        this.dataSource = resp;     
        //console.log(this.dataSource);
      });
  }

  
  obtenerLibros() {
    this.commonService.obtenerLibros().pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');        
      }
      )).subscribe(resp => {        
        this.dataSource = resp;     
        console.log(this.dataSource);
      });
  }

}
