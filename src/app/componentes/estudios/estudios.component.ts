import { EstudiosService } from './../../servicios/estudios.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  @Input()
  isLoggenIdEstudios: boolean=false;

  estudios?:any;
  titulo?:string;
  fechadesde?:string;
  fechaHasta?:string ;
  institucion?:string;
  imagen?:string ;
  id?:any;

  private editar:boolean=false

  constructor(private est:EstudiosService) { }


  ngOnInit(): void {

    this.est.obtenerestudio().subscribe(data=>{
      console.log("Estudios " + JSON.stringify(data))

        this.estudios = data;
      })
  }

  public editarEstudios(){
   this.id = this.estudios.id;
  }


  public borrarEstudios(){
    this.est.borrarEstudios(this.id).subscribe(data=>{
      console.log("Datos borrados" + JSON.stringify(data) )
    })
  }

  public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}

}
