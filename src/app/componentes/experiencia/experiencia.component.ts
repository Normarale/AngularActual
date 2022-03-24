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

  constructor(private exp:ExperienciaService ) { }

  ngOnInit(): void {

    this.exp.obtenerdatos().subscribe(data=>{
      console.log("Datos Experiencias" + JSON.stringify(data));
      this.experiencia=data[0];

    })
  }

  public setEditar(): void
  {this.editar==false?this.editar=true:this.editar=false;}

  public getEditar():boolean{return this.editar;}


}
