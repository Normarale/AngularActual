import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_PROYEC = 'https://backendportafoliodelprato.herokuapp.com/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }

  obtenerproyecto():Observable<any>{

    return this.http.get<any>(API_PROYEC + "proyecto/traer");
  }

  editarProyecto(id:any, proyectoDesc:string, fotoUrl:string, idPersona: any): Observable<any> {
    return this.http.put<any>(API_PROYEC + `proyecto/editar/id = ${id}&proyectoDesc=${proyectoDesc}&fotoUrl=${fotoUrl}&idPersona=${idPersona}`, {}, httpOptions)
  };

    borrarDatos(id:any):Observable<any>{
      return this.http.delete(API_PROYEC + "proyecto/borrar" + "/" +id, httpOptions);
    }

}
