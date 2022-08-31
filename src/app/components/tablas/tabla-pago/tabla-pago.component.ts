import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  cost: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', cost: 1.0079, date: 'H'},
  {position: 2, name: 'Helium', cost: 4.0026, date: 'He'},
  {position: 3, name: 'Lithium', cost: 6.941, date: 'Li'},
  {position: 4, name: 'Beryllium', cost: 9.0122, date: 'Be'},
  {position: 5, name: 'Boron', cost: 10.811, date: 'B'},
  {position: 6, name: 'Carbon', cost: 12.0107, date: 'C'},
  {position: 7, name: 'Nitrogen', cost: 14.0067, date: 'N'},
  {position: 8, name: 'Oxygen', cost: 15.9994, date: 'O'},
  {position: 9, name: 'Fluorine', cost: 18.9984, date: 'F'},
  {position: 10, name: 'Neon', cost: 20.1797, date: 'Ne'},
];


@Component({
  selector: 'app-tabla-pago',
  templateUrl: './tabla-pago.component.html',
  styleUrls: ['./tabla-pago.component.scss']
})
export class TablaPagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'cost', 'date','options'];
  dataSource = ELEMENT_DATA;

}
