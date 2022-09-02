import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioResumenComponent } from '../formulario/formulario-resumen/formulario-resumen.component';

@Component({
  selector: 'app-botonera-general',
  templateUrl: './botonera-general.component.html',
  styleUrls: ['./botonera-general.component.scss']
})
export class BotoneraGeneralComponent implements OnInit {

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

}
