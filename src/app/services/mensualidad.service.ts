import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { Pago } from '../models/pago';

@Injectable({
  providedIn: 'root'
})
export class MensualidadService {

  private _facturasTotales: Factura[] = [
    {
      id: 1,
      nombre: "movistar",
      url: "www.movistar.com"
    },
    {
      id: 2,
      nombre: "supercanal",
      url: "www.supercanal.com"
    },
    {
      id: 3,
      nombre: "naranja",
      url: "www.naranja.com"
    }
  ];
  private _pagosTotales: Pago[] = [
    {
      id: 1,
      pago: 123.24,
      fechaDePago: new Date("03/05/2022"),
      factura: this._facturasTotales[0]
    }
  ];

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
