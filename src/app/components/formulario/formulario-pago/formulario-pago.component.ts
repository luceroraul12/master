import { Component, OnInit } from '@angular/core';
import { MensualidadService } from '../../../services/mensualidad.service';
import { now } from 'moment';
import { Pago } from 'src/app/models/mensualidad.interface';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.scss']
})
export class FormularioPagoComponent implements OnInit {

  public pago: Pago = {
    id: 0,
    pago: 0,
    fechaDePago: new Date(now()),
    factura: {
      id: 0,
      nombre: "",
    }
  }


  get facturas(){
    return this.mensualidadService.facturasTotales;
  }
  

  constructor(
    private mensualidadService: MensualidadService
  ) { }

  ngOnInit(): void {
  }

  cargar(): void{
    this.mensualidadService.crearPago(this.pago);
  }

}
