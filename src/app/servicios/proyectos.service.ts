import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_PROYEC = 'https://backendportofoliodelprato.herokuapp.com/api/test/';

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
}
