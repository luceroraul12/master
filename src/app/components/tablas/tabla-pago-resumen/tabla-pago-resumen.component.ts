import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pago } from 'src/app/models/mensualidad.interface';
import { MensualidadService } from 'src/app/services/mensualidad.service';
import { FormularioPagoComponent } from '../../formulario/formulario-pago/formulario-pago.component';

@Component({
  selector: 'app-tabla-pago-resumen',
  templateUrl: './tabla-pago-resumen.component.html',
  styleUrls: ['./tabla-pago-resumen.component.scss']
})
export class TablaPagoResumenComponent implements OnInit {
  
  get dataSource(){
    return this.mensualidadService.pagosCargados;
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
