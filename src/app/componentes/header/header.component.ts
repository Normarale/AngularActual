
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
/* nombre?:string
apellido:string="";
fec_nacimiento:string ="";
nacionalidad:string ="";
sobremi:string = "";
email:string ="";
ocupacion:string =""*/

private editar:boolean=false



  constructor( private datos:DatosService) { }


  ngOnInit(): void {



      this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));
      this.misdatos=data[0];

    })



    }



    public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}


  }




function username(username: any, password: any) {
  throw new Error('Function not implemented.');
}

function password(username: (username: any, password: any) => void, password: any) {
  throw new Error('Function not implemented.');
}

