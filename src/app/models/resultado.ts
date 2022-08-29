import { Factura } from "./factura";
import { Pago } from "./pago";

export interface Resultado {
    facturaTrabajada: Factura;
    pagoTrabajado: Pago;
}