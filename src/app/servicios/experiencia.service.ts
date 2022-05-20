import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_EXPERIENCIA = 'https://backendportafoliodelprato.herokuapp.com/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{

    return this.http.get<any>(API_EXPERIENCIA + "experiencia/traer");
  }

  editarExperiencia(id:any, nombreEmpresa:string, trabajoActual: string, fecInicio:string, fecFinal:string, descripcion:string, personaId:Object, empleoId:any ): Observable<any> {
    return this.http.put<any>(API_EXPERIENCIA + `experiencia/editar/id = ${id}&nombreEmpresa=${nombreEmpresa}&trabajoActual=${trabajoActual}&fecInicio=${fecInicio}
    &fecFinal=${fecFinal},&descripcion=${descripcion}$personaId=${personaId}&empleoId=${empleoId} `, {}, httpOptions)
  };

    borrarExperiencia(id:any):Observable<any>{
      return this.http.delete(API_EXPERIENCIA + "experiencia/borrar" + "/" +id, httpOptions);
    }



}
