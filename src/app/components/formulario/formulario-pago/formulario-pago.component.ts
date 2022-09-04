import { Component, OnInit } from '@angular/core';
import { MensualidadService } from '../../../services/mensualidad.service';
import { now } from 'moment';
import { Pago } from 'src/app/models/mensualidad.interface';
import { MatDialogRef } from '@angular/material/dialog';

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
    private mensualidadService: MensualidadService,
    public dialogRef: MatDialogRef<FormularioPagoComponent>
  ) { }

  ngOnInit(): void {
  }

  cargar(): void{
    this.mensualidadService.crearPago(this.pago);
    this.cerrar();
  }

  cerrar(): void{
    this.dialogRef.close();
  }
}
