import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioFacturaComponent } from '../../formulario/formulario-factura/formulario-factura.component';
import { Factura } from '../../../models/factura';
import { MensualidadService } from '../../../services/mensualidad.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-tabla-factura',
  templateUrl: './tabla-factura.component.html',
  styleUrls: ['./tabla-factura.component.scss']
})
export class TablaFacturaComponent implements OnInit {

  get dataSource(){
    return this.mensualidadService.facturasTotales;
  }

  constructor(
    public dialog: MatDialog,
    public mensualidadService: MensualidadService
    ) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'url','options'];


  editar(factura: Factura){
    const dialogRef = this.dialog.open(FormularioFacturaComponent, {
      data: factura,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminar(factura: Factura){
    alert("Seguro que quieres eliminar el servicio: "+factura.nombre+"?");
    this.mensualidadService.eliminarFactura(factura);

  }
}
