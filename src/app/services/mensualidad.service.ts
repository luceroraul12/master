import { Injectable } from '@angular/core';
import { now } from 'moment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Factura, Pago, Mensualidad } from '../models/mensualidad.interface';
import { environment } from '../../environments/environment';

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

  constructor(
    private http: HttpClient
  ) { 
    this.obtenerFacturas();
    this.obtenerPagos();
  }

  obtenerFacturas(){
    this.http.get<Mensualidad>("/api/facturas").subscribe(
      respuesta => {
        this._facturasTotales = respuesta.facturasCreadas
      }
    )
  }

  obtenerPagos(){
    this.http.get<Mensualidad>("/api/pagos").subscribe(
      respuesta => {
        this._pagosTotales = respuesta.pagosCreados;
      }
    )
  }

  crearFactura(factura: Factura):void {
    const params = new HttpParams()
    .set('nombre-servicio', factura.nombre);

    this.http.post("/api/facturas", params).subscribe();
    
    this.obtenerFacturas();
  }

  crearPago(pago: Pago):void {
    this._pagosTotales.push(pago);
  }


  modificarFactura(factura: Factura):void {

  }
  
  modificarPago(factura: Factura):void {

  }

  eliminarFactura(factura: Factura):void {

    const params = new HttpParams().set("id", factura.id);

    this.http.delete("/api/facturas/delete", {params}).subscribe();
    this.obtenerFacturas();
  }

  eliminarPago(pago: Pago):void {
    this._pagosTotales.splice(
      this._pagosTotales.indexOf(pago),
      1
    );
  }


}
