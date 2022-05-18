import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const API_DOMICILIO = 'http://localhost:8080/api/test/';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class DomiciliosService {

  constructor(private http:HttpClient) { }

  obtenerdomicilios():Observable<any>{

    return this.http.get<any>(API_DOMICILIO + "domicilio/traer");
  }

  editarDomicilio(id:any, direccion:string, altura:string, idLocalidad: any): Observable<any> {
    return this.http.put<any>(API_DOMICILIO + `domicilio/editar/id = ${id}&direccion=${direccion}&altura=${altura}&idlocalidad=${idLocalidad}`, {}, httpOptions)
  };

    borrarDatos(id:any):Observable<any>{
      return this.http.delete(API_DOMICILIO + "domicilio/borrar" + "/" +id, httpOptions);
    }





}
