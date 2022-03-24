import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  @Input()
  isLoggenIdEstudios: boolean=false;

  estudios:any;
  contenido?:string;
  private editar:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}

}
