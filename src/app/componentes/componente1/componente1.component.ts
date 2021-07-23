import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ExporterService } from 'src/app/services/exporter.service';

import { finalize } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

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
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  estructuraArchivo = [];
  mostrar:boolean=false;

  displayedColumns: string[] = ['idBook', 'title', 'description', 'pageCount', 'excerpt', 'publishDate', 'autor'];
  dataSource = ELEMENT_DATA;

  constructor(
    private commonService: CommonService,
    private excelService: ExporterService,
    
  ) { }

  ngOnInit() {
    this.obtenerDatos();
    
}
  
  obtenerDatos() {
    this.commonService.obtenerLibros().pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');        
      }
      )).subscribe(resp => {        
        this.dataSource = resp;  
        this.mostrar = true;   
        Swal.fire('Completado', 'Servicio libros completado exitosamente', 'success');
      });
  } 

  exportAsXLSX(): void {   
    this.excelService.exportToExcel(this.dataSource, 'Libros');   
  }
  
}
