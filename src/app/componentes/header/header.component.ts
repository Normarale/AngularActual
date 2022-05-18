
import { DatosService } from './../../servicios/datos.service';

import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  isLoggenIdHeader: boolean=false;


misdatos:any;
contenido?:string;
private id?:any;


 constructor( private datos:DatosService) { }


  ngOnInit(): void {

      this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));

      this.misdatos=data[0];
      //let id = this.misdatos.id;
    })

    }





  }






function username(username: any, password: any) {
  throw new Error('Función no implementada.');
}

function password(username: (username: any, password: any) => void, password: any) {
  throw new Error('Función no implementada.');
}

