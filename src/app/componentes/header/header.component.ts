
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
private id:any;
private editar:boolean=false

private img_background?:string;
private nombre?:string;
private apellido?:string;
private sobremi?:string;




  constructor( private datos:DatosService) { }


  ngOnInit(): void {

      this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));

      this.misdatos=data[0];
      //let id = this.misdatos.id;
    })

    }


    public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}


    public getEditar():boolean{return this.editar;}


    public actualizar(){
       this.nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
       this.apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
       this.img_background = (<HTMLInputElement>document.getElementById("imagenfondo")).value;
       this.sobremi=(<HTMLInputElement>document.getElementById("sobremi")).value;
       this.id = this.misdatos.id;
       console.log(this.nombre);
       console.log(this.apellido);
       console.log(this.img_background);
       console.log(this.sobremi);
       console.log(this.id);
       this.datos.editarDatosHeader(this.id, this.nombre, this.apellido, this.img_background, this.sobremi).subscribe(data =>{
       JSON.stringify(data);
       this.misdatos = data
       });




    }

    public Eliminar(){
    this.datos.borrarDatos(this.id).subscribe();
    }


  }






function username(username: any, password: any) {
  throw new Error('Función no implementada.');
}

function password(username: (username: any, password: any) => void, password: any) {
  throw new Error('Función no implementada.');
}

