import { Component, Input, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {name: 'Hydrogen'},
  {name: 'Helium'},
  {name: 'Lithium'},
  {name: 'Beryllium'},
  {name: 'Boron'},
  {name: 'Carbon'},
  {name: 'Nitrogen'},
  {name: 'Oxygen'},
  {name: 'Fluorine'},
  {name: 'Neon'},
];



@Component({
  selector: 'app-tabla-factura-resumen',
  templateUrl: './tabla-factura-resumen.component.html',
  styleUrls: ['./tabla-factura-resumen.component.scss']
})
export class TablaFacturaResumenComponent implements OnInit {

  @Input() public nombreTabla: string | undefined;



  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;

  getRecord(row: any){
    console.log(row);
  }
}
