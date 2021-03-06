import { DomiciliosService } from './../../servicios/domicilios.service';
import { TecnologiasService } from './../../servicios/tecnologias.service';
import { LocalidadService } from './../../servicios/localidad.service';
import { Component, Input, OnInit } from '@angular/core';

import { CargarSkilService } from 'src/app/servicios/cargar-skil.service';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  @Input()
  isLoggenIdAcerca: boolean=false;
    codPostal?:string;
    idLocalidad?:any;
    localidad?:string;
    misdatos:any;
    miloc:any;
    mitecno:any;
    domi: any;
   contenido?:string;

   id?:any;
   img_background?:string;
   nombre?:string;
   apellido?:string;
   fecha?:string;
   sobremi?:string;
   img_perfil?:string;
   ocupacion?:string ;
   mail?:string;
   nacionalidad?:string;
   idDomicilio?:Object;
   direccion?:string;
   altura?: string;


   private editar:boolean=false


  constructor(private _cargaSkill:CargarSkilService,  private datos:DatosService, private dom:DomiciliosService, private loc:LocalidadService, private tecno:TecnologiasService) {
    _cargaSkill.carga(["/skil"]);
   }

  ngOnInit(): void {


    this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));
      this.misdatos=data[0];

    })

    this.dom.obtenerdomicilios().subscribe(data=>{
      console.log("Datos Domicilio" + JSON.stringify(data));
      this.domi = data[0];

    })

    this.loc.obtenerlocalidad().subscribe(data=>{
      console.log("localidad " + JSON.stringify(data))
      this.miloc = data[0];

    })

    this.tecno.obtenertecnologia().subscribe(data=>{
      console.log("Tecnologías " + JSON.stringify(data))

        this.mitecno = data;


    })


   }

   public editarDatos(){

   this.id = this.misdatos.id;
   const domicilio = {
     domicilio :this.misdatos.idDomicilio

    }

   this.nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
   this.apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
   this.sobremi=(<HTMLInputElement>document.getElementById("sobremi")).value;
   this.img_background = (<HTMLInputElement>document.getElementById("fondo")).value;
   this.fecha = (<HTMLInputElement>document.getElementById("fecha")).value;
   this.img_perfil = (<HTMLInputElement>document.getElementById("imagen")).value;
   this.nacionalidad = (<HTMLInputElement>document.getElementById("nacionalidad")).value;
   this.ocupacion = (<HTMLInputElement>document.getElementById("ocupacion")).value;
   this.mail = (<HTMLInputElement>document.getElementById("mail")).value;



     this.datos.editarDatos(this.id, this.nombre, this.apellido,  this.img_background, this.sobremi, this.fecha, this.mail, this.img_perfil, this.nacionalidad, this.ocupacion, domicilio ).subscribe(data =>{
       console.log("datos modificados" + JSON.stringify(data))
     });

   }


  public borrarDatos(){
    this.datos.borrarDatos(this.id).subscribe(data=>{
      console.log("Datos borrados" + JSON.stringify(data) )
    })
  }

   public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}


}
