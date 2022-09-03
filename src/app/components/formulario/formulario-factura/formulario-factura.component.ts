import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private mensualidadService: MensualidadService,
    @Inject(MAT_DIALOG_DATA) public data: Factura
  ) {
    this.factura = data;
  }

  ngOnInit(): void {
  }

  crear(): void{
    this.mensualidadService.crearFactura(this.factura)    
  }


}
