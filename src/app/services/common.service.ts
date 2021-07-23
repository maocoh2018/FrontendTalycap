import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  public obtenerLibros(): Observable<any[]> {
    return this.http.get<any[]>(environment.urlApi + '/Api/Bilioteca/GetLibros');
  }

  public obtenerAutores(): Observable<any[]> {
    return this.http.get<any[]>(environment.urlApi + '/Api/Bilioteca/GetAutores');
  }
  
  public obtenerLibro(id:string): Observable<any[]> {
    return this.http.get<any[]>(environment.urlApi + `/Api/Bilioteca/GetAutor?id=${ id }`);
  }

}

