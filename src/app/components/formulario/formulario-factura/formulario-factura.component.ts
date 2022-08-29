import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.scss']
})
export class FormularioFacturaComponent implements OnInit {

  public factura: Factura = {} as Factura;


  constructor() {}

  ngOnInit(): void {
  }

  enviarDatos(){
    alert("INFORMACION ENVIADA: "+ this.factura.id + " " + this.factura.nombre);
  }

}
