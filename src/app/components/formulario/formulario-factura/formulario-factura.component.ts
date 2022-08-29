import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.scss']
})
export class FormularioFacturaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(){
    alert("INFORMACION ENVIADA");
  }

}
