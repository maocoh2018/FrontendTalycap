import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { ExporterService } from 'src/app/services/exporter.service';
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
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  displayedColumns: string[] = ['idAutor', 'idBook', 'firstName', 'lastName'];
  dataSource = ELEMENT_DATA;
  mostrar:boolean=false;

  constructor(private commonService:CommonService,
    private excelService: ExporterService,) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.commonService.obtenerAutores().pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');        
      }
      )).subscribe(resp => {        
        this.dataSource = resp; 
        this.mostrar = true;    
        Swal.fire('Completado', 'Servicio carga de autores completado exitosamente', 'success');
      });
  }

  exportAsXLSX(): void {   
    this.excelService.exportToExcel(this.dataSource, 'Autores');   
  }

}
