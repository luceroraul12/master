import { Factura } from "./factura";

export interface Pago {
    id:          number;
    pago:        number;
    fechaDePago: Date;
    factura:     Factura;
}
