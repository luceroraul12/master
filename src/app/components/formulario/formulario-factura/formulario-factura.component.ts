import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Factura } from 'src/app/models/mensualidad.interface';
import { MensualidadService } from 'src/app/services/mensualidad.service';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.scss']
})
export class FormularioFacturaComponent implements OnInit {

  public factura: Factura = {
    id: 0,
    nombre: "",
  };


  constructor(
    private mensualidadService: MensualidadService,
    @Inject(MAT_DIALOG_DATA) public data: Factura,
    public dialogRef: MatDialogRef<FormularioFacturaComponent>
  ) {
    this.factura = data;
  }

  ngOnInit(): void {
  }

  crear(): void{
    this.mensualidadService.crearFactura(this.factura)  
    this.cerrar();  
  }
  
  cerrar(){
    this.dialogRef.close();
  }


}
