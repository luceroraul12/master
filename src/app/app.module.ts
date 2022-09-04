import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';


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
import { BotoneraGeneralComponent } from './components/botonera-general/botonera-general.component';
import { TablaFacturaResumenComponent } from './components/tablas/tabla-factura-resumen/tabla-factura-resumen.component';
import { FormularioResumenComponent } from './components/formulario/formulario-resumen/formulario-resumen.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MensualidadService } from './services/mensualidad.service';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { TablaPagoResumenComponent } from './components/tablas/tabla-pago-resumen/tabla-pago-resumen.component';


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
    TablaPagoComponent,
    BotoneraGeneralComponent,
    TablaFacturaResumenComponent,
    FormularioResumenComponent,
    InicioComponent,
    TablaPagoResumenComponent,
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
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    MensualidadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
