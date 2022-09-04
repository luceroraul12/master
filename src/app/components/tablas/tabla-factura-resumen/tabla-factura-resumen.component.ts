import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Factura } from 'src/app/models/mensualidad.interface';
import { FormularioPagoComponent } from '../../formulario/formulario-pago/formulario-pago.component';



@Component({
  selector: 'app-tabla-factura-resumen',
  templateUrl: './tabla-factura-resumen.component.html',
  styleUrls: ['./tabla-factura-resumen.component.scss']
})
export class TablaFacturaResumenComponent implements OnInit {

  @Input() public nombreTabla: string | undefined;
  @Input() public dataSource: Factura[] = [];




  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name'];

  abrirEnlace(row: any){
    console.log(row);
    window.open(row.link, '_blank')?.focus();
    this.abrirCargarFactura();
  }

  abrirCargarFactura(){
    const dialogRef = this.dialog.open(FormularioPagoComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
