
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


  constructor(private proyec:ProyectosService) { }

  ngOnInit(): void {
    this.proyec.obtenerproyecto().subscribe(data=>{
      console.log("Proyectos " + JSON.stringify(data))

        this.proyecto = data[0];
      })
  }


  public setEditar(): void
  {this.editar==false?this.editar=true:this.editar=false;}

  public getEditar():boolean{return this.editar;}

}
