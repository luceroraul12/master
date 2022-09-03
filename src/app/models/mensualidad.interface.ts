export interface Mensualidad {
    pagosCargados:     Pago[];
    facturasCargadas:  Factura[];
    facturasFaltantes: Factura[];
    costoTotalPagado:  number;
    facturasCreadas:   Factura[];
    pagosCreados:      Pago[];
    facturaTrabajada:  Factura;
    pagoTrabajado:     Pago;
}

export interface Factura {
    id:     number;
    nombre: string;
}

export interface Pago {
    id:          number;
    pago:        number;
    fechaDePago: Date;
    factura:     Factura;
}
