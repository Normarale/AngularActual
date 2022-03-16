import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_PERSONA = 'http://localhost:8080/api/test/';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }

  obtenerdatos():Observable<any>{

    return this.http.get<any>(API_PERSONA + "persona/traer");
  }


}
