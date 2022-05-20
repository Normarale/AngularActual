import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input()
  isLoggenIdContacto: boolean=false;

  contacto:any;
  contenido?:string;
  private editar:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  
  public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}

}
