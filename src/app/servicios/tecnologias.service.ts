import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_TECNOLOGIA = 'http://localhost:8080/api/test/';

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
}
