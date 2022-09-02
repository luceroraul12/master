import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-formulario-resumen',
  templateUrl: './formulario-resumen.component.html',
  styleUrls: ['./formulario-resumen.component.scss']
})
export class FormularioResumenComponent implements OnInit {


  formResumen!: FormGroup;

  constructor(
    private dateAdapter: DateAdapter<Date>
  ) { 

    dateAdapter.setLocale("es-AR");

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
    alert("Cargando fecha " + fecha)
  }
}
