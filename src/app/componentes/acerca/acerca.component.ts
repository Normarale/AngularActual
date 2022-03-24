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
   misdatos:any;
   miloc:any;
   contenido?:string;
   private editar:boolean=false

  constructor(private _cargaSkill:CargarSkilService,  private datos:DatosService, private loc:LocalidadService) {
    _cargaSkill.carga(["/skil"]);
   }

  ngOnInit(): void {


    this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));
      this.misdatos=data[0];

    })

    this.loc.obtenerdatos().subscribe(data=>{
      console.log("localidad " + JSON.stringify(data))
      this.miloc =data[0];
    })
   }

   public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}


}
