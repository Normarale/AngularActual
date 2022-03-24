import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  guardardatos(nombre: string, apellido: string, fec_nacimiento: string, nacionalidad:string, email:string,  sobremi:string, ocupacion:string ): Observable<any> {
    return this.http.post(API_PERSONA + 'persona/crear', {
      nombre,
      apellido,
      fec_nacimiento,
      email,
      nacionalidad,
      sobremi,
      ocupacion
    }, httpOptions);
  }

}
