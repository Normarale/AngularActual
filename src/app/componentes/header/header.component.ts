
import { DatosService } from './../../servicios/datos.service';

import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

misdatos:any;
contenido?:string;
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

