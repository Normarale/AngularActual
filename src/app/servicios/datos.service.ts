import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_PERSONA = 'https://backendportofoliodelprato.herokuapp.com/api/test/';

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


  /*editarDatosHeader(id:any, nombre: string, apellido:string, img_background:string, sobremi:string, img_perfil:string, ocupacion:string, mail:string, nacionalidad:string): Observable<any> {
   let params = new HttpParams()
   .set('nombre', nombre)
   .set('apellido', apellido)
   .set('img_background', img_background)
   .set('sobremi', sobremi)
   .set('img_perfil', img_perfil)
   .set('ocupacion', ocupacion)
   .set('mail', mail)
   .set('nacionalidad', nacionalidad);
  return this.http.put<any>(API_PERSONA + "persona/editar/" + id,
  {params},httpOptions);
}*/

editarDatos(id:any, nombre:string, apellido:string, img_background:string, sobremi:string, fecNacimiento:string, mail:string, img_perfil:string, nacionalidad:string, ocupacion:string, idDomicilio:any ): Observable <any> {
  return this.http.put<any>(API_PERSONA + `persona/editar/id = ${id}?&nombre=${nombre}&apellido=${apellido}&img_background=${img_background}&sobremi=${sobremi}&fecNacmiento=${fecNacimiento}&img_perfil=${img_perfil}&ocupacion=${ocupacion}&mail=${mail}&nacionalidad=${nacionalidad}&idDomicilio=${idDomicilio}`, {}, httpOptions)
};

  borrarDatos(id:any):Observable<any>{
    return this.http.delete(API_PERSONA + "persona/borrar" + "/" +id, httpOptions);
  }


}
