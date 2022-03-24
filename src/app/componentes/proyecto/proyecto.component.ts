import { Component, Input, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }


  public setEditar(): void
  {this.editar==false?this.editar=true:this.editar=false;}

  public getEditar():boolean{return this.editar;}

}
