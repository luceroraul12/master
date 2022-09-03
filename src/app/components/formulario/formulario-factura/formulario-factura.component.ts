import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { MensualidadService } from 'src/app/services/mensualidad.service';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.scss']
})
export class FormularioFacturaComponent implements OnInit {

  public factura: Factura = {
    id: 0,
    nombre: "",
    url: ""
  };

  constructor(
    private mensualidadService: MensualidadService
  ) {
  }

  ngOnInit(): void {
  }

  crear(): void{
    this.mensualidadService.crearFactura(this.factura)    
  }


}
