import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_TECNOLOGIA = 'https://backendportafoliodelprato.herokuapp.com/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  constructor(private http:HttpClient) { }

  obtenertecnologia():Observable<any>{

    return this.http.get<any>(API_TECNOLOGIA + "tecnologia/traer");
  }

  editarTecnologia(id:any, tecnologia:string): Observable<any> {
    return this.http.put<any>(API_TECNOLOGIA + `tecnologia/editar/id = ${id}&direccion=${tecnologia}`, {}, httpOptions)
  };

    borrarDatos(id:any):Observable<any>{
      return this.http.delete(API_TECNOLOGIA + "tecnologia/borrar" + "/" +id, httpOptions);
    }


}
