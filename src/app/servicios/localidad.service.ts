import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_LOCALIDAD = 'https://backendportafoliodelprato.herokuapp.com/api/test/';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private http:HttpClient) { }

  obtenerlocalidad():Observable<any>{

    return this.http.get<any>(API_LOCALIDAD + "localidad/traer");
  }

  editarlocalidad(idLocalidad: any, data:any):Observable<any>{

    return this.http.put<any>(API_LOCALIDAD + "localidad/editar"+ "/" + idLocalidad, {data}, httpOptions);
  }

   public delete(id: number):Observable<any>{
    return this.http.delete<any>(API_LOCALIDAD + "borrar/localidad?id="+id);
  }


}
