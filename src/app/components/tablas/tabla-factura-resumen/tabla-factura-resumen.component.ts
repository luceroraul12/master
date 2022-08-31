import { Component, Input, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {name: 'Hydrogen', link: "https://www.google.com/"},
  {name: 'Helium', link: "https://www.youtube.com/"},
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

  abrirEnlace(row: any){
    console.log(row);
    window.open(row.link, '_blank')?.focus();
  }
}
