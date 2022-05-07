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
   public codPostal?:string = "";
   public idLocalidad?:any = "";
   public localidad?:string = "";
   public misdatos:any;
   public miloc:any;
   public mitecno:any;
   public contenido?:string;
   private editar:boolean=false


  constructor(private _cargaSkill:CargarSkilService,  private datos:DatosService, private loc:LocalidadService, private tecno:TecnologiasService) {
    _cargaSkill.carga(["/skil"]);
   }

  ngOnInit(): void {


    this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));
      this.misdatos=data[0];

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

   public editarLocalidad(){
    this.loc.obtenerlocalidad()

    this.miloc.localidad = (<HTMLInputElement>document.getElementById("localidad")).value;
    const data = {
      codPostal:this.miloc.codigoPostal,
      localidad:this.miloc.localidad
     };
     console.log(data)
     this.loc.editarlocalidad(this.idLocalidad, data).subscribe(data=>{
      console.log("localidad modificada")

     });


   }


   public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}


}
