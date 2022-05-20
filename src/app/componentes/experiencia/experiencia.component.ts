import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input()
  isLoggenIdExperiencia: boolean=false;

  experiencia:any;
  contenido?:string;
  private editar:boolean=false
  private id?:any;
  private nombreEmpresa?:string;
  private trabajoActual?:string;
  private fechaInicio?:string;
  private fechaFinal?:string;
  private descripcion?: string;
  private personaId?:any;
  private empleoId?:any;

  constructor(private exp:ExperienciaService ) { }

  ngOnInit(): void {

    this.exp.obtenerdatos().subscribe(data=>{
      console.log("Datos Experiencias" + JSON.stringify(data));
      this.experiencia=data[0];

    })
  }

  public editarExperiencia(){
    this.id = this.experiencia.id;
    this.personaId = this.experiencia.personaId;
    this.empleoId = this.experiencia.empleoId;


   this.nombreEmpresa = (<HTMLInputElement>document.getElementById("nombreEmpresa")).value;
   this.descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
   this.fechaInicio=(<HTMLInputElement>document.getElementById("fechaInicio")).value;
   this.fechaFinal = (<HTMLInputElement>document.getElementById("fechaFinal")).value;
   this.trabajoActual = (<HTMLInputElement>document.getElementById("trabajoActual")).value;

     this.exp.editarExperiencia(this.id, this.nombreEmpresa, this.trabajoActual, this.fechaInicio,  this.fechaFinal, this.descripcion, this.personaId, this.empleoId).subscribe(data =>{
       console.log("datos modificados" + JSON.stringify(data))
     });



  }
  public borrarExperiencia(){
    this.exp.borrarExperiencia(this.id).subscribe(data=>{
      console.log("Datos borrados" + JSON.stringify(data) )
    })
  }


  public setEditar(): void
  {this.editar==false?this.editar=true:this.editar=false;}

  public getEditar():boolean{return this.editar;}





}
