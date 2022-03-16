import { UserService } from './../../servicios/user.service';
import { DatosService } from './../../servicios/datos.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
misdatos:any;
contenido?:string;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {

   

    this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));
      this.misdatos=data[0];

    })
  }



}
