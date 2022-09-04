import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MensualidadService } from '../../../services/mensualidad.service';

@Component({
  selector: 'app-formulario-resumen',
  templateUrl: './formulario-resumen.component.html',
  styleUrls: ['./formulario-resumen.component.scss']
})
export class FormularioResumenComponent implements OnInit {


  formResumen!: FormGroup;

  constructor(
    private mensualidadService: MensualidadService
  ) { 


  }

  ngOnInit(): void {
    this.formResumen = new FormGroup(
      {
        fecha: new FormControl('', Validators.required)
      }
    );


  }  
  
  cargar(){
    let fecha = this.formResumen.get("fecha")?.value;
    this.mensualidadService.obtenerResumen(fecha);
  }
}
