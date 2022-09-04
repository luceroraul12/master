import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioPagoComponent } from '../../formulario/formulario-pago/formulario-pago.component';
import { MensualidadService } from '../../../services/mensualidad.service';
import { Pago } from 'src/app/models/mensualidad.interface';

@Component({
  selector: 'app-tabla-pago',
  templateUrl: './tabla-pago.component.html',
  styleUrls: ['./tabla-pago.component.scss']
})
export class TablaPagoComponent implements OnInit {


  get dataSource(){
    return this.mensualidadService.pagosTotales;
  }

  constructor(
    public dialog: MatDialog,
    private mensualidadService: MensualidadService
    ) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'date','cost','options'];


  editar(pago: Pago){
    const dialogRef = this.dialog.open(FormularioPagoComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminar(pago: Pago){
    this.mensualidadService.eliminarPago(pago);
  }

}
