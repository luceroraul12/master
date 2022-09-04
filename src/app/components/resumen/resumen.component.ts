import { Component, OnInit } from '@angular/core';
import { MensualidadService } from '../../services/mensualidad.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {


  get facturasCargadas(){
    return this.mensualidadService.facturasCargadas
  }

  get facturasFaltantes(){
    return this.mensualidadService.facturasFaltantes;
  }

  get pagosCargados(){
    return this.mensualidadService.pagosCargados;
  }



  constructor(private mensualidadService: MensualidadService) { }

  ngOnInit(): void {
  }

  abrirCargarFactura(){

  }

  abrirEliminarPago(){

  }

  abrirModificarPago(){
    
  }

}
