import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioPagoComponent } from '../../formulario/formulario-pago/formulario-pago.component';
import { Pago } from '../../../models/pago';
import { MensualidadService } from '../../../services/mensualidad.service';

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
    alert("Seguro que quieres eliminar el pago de: ABC 123 dd/MM/yyyy?")
  }

}
