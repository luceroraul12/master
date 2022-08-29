import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PagoComponent } from './components/pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
