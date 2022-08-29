import { Factura } from "./factura";
import { Pago } from "./pago";

export interface Resumen {
    facturasCargadas:  Factura[];
    facturasFaltantes: Factura[];
    pagosCargados:     Pago[];
    costoTotalPagado:  number;
}