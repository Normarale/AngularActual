import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  misdatos:any;
  private editar:boolean=false
  constructor( private datos:DatosService) { }

  ngOnInit(): void {



      this.datos.obtenerdatos().subscribe(data=>{
      console.log("Datos Personales" + JSON.stringify(data));
      this.misdatos=data[0];

    })

    }
  public setEditar(): void
  {this.editar==false?this.editar=true:this.editar=false;}

  public getEditar():boolean{return this.editar;}

}
