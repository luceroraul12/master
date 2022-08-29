import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './components/factura/factura.component';
import { PagoComponent } from './components/pago/pago.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {path: '',  component: ResumenComponent},
  {path: 'home', component: ResumenComponent},
  {path: 'facturas', component: FacturaComponent},
  {path: 'pagos', component: PagoComponent},
  {path: '**', component: ResumenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
