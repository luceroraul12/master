import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PagoComponent } from './components/pago/pago.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioFacturaComponent } from './components/formulario/formulario-factura/formulario-factura.component';
import { FormularioPagoComponent } from './components/formulario/formulario-pago/formulario-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    PagoComponent,
    ResumenComponent,
    BarraMenuComponent,
    FormularioFacturaComponent,
    FormularioPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
