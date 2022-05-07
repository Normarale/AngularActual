import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_PERSONA = 'http://localhost:8080/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DatosService {


  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{

    return this.http.get<any>(API_PERSONA + "persona/traer");
  }


  editarDatosHeader(id:any, nombre: string, apellido:string, img_background:string, sobremi:string,): Observable<any> {
   let params = new HttpParams()
   .set('nombre', nombre)
   .set('apellido', apellido)
   .set('img_background', img_background)
   .set('sobremi', sobremi);
  return this.http.put<any>(API_PERSONA + "persona/editarHeader"+ "/" + id,
  {params},httpOptions);
}

  borrarDatos(id:any):Observable<any>{
    return this.http.delete(API_PERSONA + "persona/borrar" + "/" +id, httpOptions);
  }

 
}
