import { Component, OnInit } from '@angular/core';
import { MensualidadService } from '../../../services/mensualidad.service';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.scss']
})
export class FormularioPagoComponent implements OnInit {

  get facturas(){
    return this.mensualidadService.facturasTotales;
  }

  constructor(
    private mensualidadService: MensualidadService
  ) { }

  ngOnInit(): void {
  }

  cargar(): void{

  }

}
