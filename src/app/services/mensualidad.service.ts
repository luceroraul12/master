import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class MensualidadService {

  private _facturasTotales: Factura[] = [];
  private _pagosTotales: Pago[] = [];

  get facturasTotales(){
    return [...this._facturasTotales];
  }

  get pagosTotales(){
    return [...this._pagosTotales];
  }

  constructor() { }

  crearFactura(factura: Factura):void {
    this._facturasTotales.push(factura);
  }

  crearPago(pago: Pago):void {
    this._pagosTotales.push(pago);
  }


  modificarFactura(factura: Factura):void {

  }
  
  modificarPago(factura: Factura):void {

  }

  eliminarFactura(factura: Factura):void {
    this._facturasTotales.splice(
      this._facturasTotales.indexOf(factura)
      , 
      1);
  }

  eliminarPago(pago: Pago):void {
    this._pagosTotales.splice(
      this._pagosTotales.indexOf(pago),
      1
    );
  }


}
