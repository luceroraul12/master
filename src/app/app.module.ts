import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';


import { AppComponent } from './app.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PagoComponent } from './components/pago/pago.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioFacturaComponent } from './components/formulario/formulario-factura/formulario-factura.component';
import { FormularioPagoComponent } from './components/formulario/formulario-pago/formulario-pago.component';
import { TablaFacturaComponent } from './components/tablas/tabla-factura/tabla-factura.component';
import { TablaPagoComponent } from './components/tablas/tabla-pago/tabla-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    PagoComponent,
    ResumenComponent,
    BarraMenuComponent,
    FormularioFacturaComponent,
    FormularioPagoComponent,
    TablaFacturaComponent,
    TablaPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
