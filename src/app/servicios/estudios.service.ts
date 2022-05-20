import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_ESTUDIO = 'https://backendportafoliodelprato.herokuapp.com/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http:HttpClient) { }

  obtenerestudio():Observable<any>{

    return this.http.get<any>(API_ESTUDIO + "educacion/traer");
  }

  editarEstudios(id:any, institucion:string, titulo:string, carrera: string, imagen: string, puntaje:string, fechaDesde:string, fechaHasta:string ): Observable<any> {
    return this.http.put<any>(API_ESTUDIO + `educacion/editar/id = ${id}&institucion=${institucion}&titulo=${titulo}&carrera=${carrera}&imagen=${imagen}&puntaje=${puntaje}
    &fechaDesde=${fechaDesde}&fechaHasta=${fechaHasta}`, {}, httpOptions)
  };

    borrarEstudios(id:any):Observable<any>{
      return this.http.delete(API_ESTUDIO + "educacion/borrar" + "/" +id, httpOptions);
    }




}
