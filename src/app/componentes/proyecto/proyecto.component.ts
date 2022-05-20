
import { Component, Input, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input()
  isLoggenIdProyecto: boolean=false;

 proyecto:any;
 contenido?:string;
  private editar:boolean=false
  private id?: any;
private descProyecto?:string;
private fotoUrl?:string;
private idPersona?:any;

  constructor(private proyec:ProyectosService) { }

  ngOnInit(): void {
    this.proyec.obtenerproyecto().subscribe(data=>{
      console.log("Proyectos " + JSON.stringify(data))

        this.proyecto = data[0];
      })
  }


public editarProyectos(){
  this.id = this.proyecto.id;
  this.idPersona = this.proyecto.idPersona

   this.descProyecto = (<HTMLInputElement>document.getElementById("descripcion")).value;
   this.fotoUrl = (<HTMLInputElement>document.getElementById("foto")).value;
       this.proyec.editarProyecto(this.id, this.descProyecto, this.fotoUrl, this.idPersona ).subscribe(data =>{
       console.log("datos modificados" + JSON.stringify(data))
     });

}



  public setEditar(): void
  {this.editar==false?this.editar=true:this.editar=false;}

  public getEditar():boolean{return this.editar;}





}
