import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioFacturaComponent } from '../formulario/formulario-factura/formulario-factura.component';
import { FormularioPagoComponent } from '../formulario/formulario-pago/formulario-pago.component';
import { FormularioResumenComponent } from '../formulario/formulario-resumen/formulario-resumen.component';

@Component({
  selector: 'app-botonera-general',
  templateUrl: './botonera-general.component.html',
  styleUrls: ['./botonera-general.component.scss']
})
export class BotoneraGeneralComponent implements OnInit {

  @Input() tipo!: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cargarMes(){
    const dialogRef = this.dialog.open(FormularioResumenComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

crear(){
  this.adaptarTipoyCrear();
}

  adaptarTipoyCrear(): void{
    switch(this.tipo){
      case "factura":
        this.crearFactura();
        break;
      case "pago":
        this.crearPago();
        break;
    }
  }

  crearFactura(){
    const dialogRef = this.dialog.open(FormularioFacturaComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  crearPago(){
    const dialogRef = this.dialog.open(FormularioPagoComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
