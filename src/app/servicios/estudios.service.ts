import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_ESTUDIO = 'https://backendportofoliodelprato.herokuapp.com/api/test/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http:HttpClient) { }

  obtenerestudio():Observable<any>{

    return this.http.get<any>(API_ESTUDIO + "educacion/traer");
  }
}
