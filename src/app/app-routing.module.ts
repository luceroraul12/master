import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './components/factura/factura.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagoComponent } from './components/pago/pago.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {path: 'facturas', component: FacturaComponent},
  {path: 'pagos', component: PagoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'resumen', component: ResumenComponent},
  {path: '**', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
