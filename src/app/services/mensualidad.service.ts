import { Injectable } from '@angular/core';
import { now } from 'moment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Factura, Pago, Mensualidad } from '../models/mensualidad.interface';
import { Conversiones } from '../util/conversiones.util';

@Injectable({
  providedIn: 'root'
})
export class MensualidadService {


  private _facturasTotales: Factura[] = [];
  private _pagosTotales: Pago[] = [];
  private _facturasCargadas: Factura[] = [];
  private _facturasFaltantes: Factura[] = [];
  private _pagosCargados: Pago[] = [];
  private _fechaElegida: Date = new Date(now());

  get pagosCargados(){
    return [...this._pagosCargados];
  }

  get facturasCargadas(){
    return [...this._facturasCargadas];
  }

  get facturasFaltantes(){
    return [...this._facturasFaltantes];
  }

  get facturasTotales(){
    return [...this._facturasTotales];
  }

  get pagosTotales(){
    return [...this._pagosTotales];
  }

  get fechaElegida(){
    return this._fechaElegida;
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

  obtenerResumen(fecha: Date){
    this._fechaElegida = fecha;
    
    const params = new HttpParams()
    .set("fecha",
      Conversiones.adptarFecha(fecha)
    );

    this.http.get<Mensualidad>("/api/mensual", {params}).subscribe(
      respuesta => {
        this._facturasCargadas = respuesta.facturasCargadas;
        this._facturasFaltantes = respuesta.facturasFaltantes;
        this._pagosCargados = respuesta.pagosCargados;
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
    const params = new HttpParams()
        .set("id-servicio", pago.factura.id)
        .set("costo", pago.pago)
        .set("fecha", Conversiones.adptarFecha(pago.fechaDePago));

    this.http.post("/api/pagos", params).subscribe();

    this.obtenerPagos();
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
    const params = new HttpParams().set("id",pago.id);

    this.http.delete("/api/pagos/delete", {params}).subscribe();
    this.obtenerPagos();
  }


}
