import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_EXPERIENCIA = 'http://localhost:8080/api/test/';

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
}
