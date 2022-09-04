import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPagoResumenComponent } from './tabla-pago-resumen.component';

describe('TablaPagoResumenComponent', () => {
  let component: TablaPagoResumenComponent;
  let fixture: ComponentFixture<TablaPagoResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPagoResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPagoResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
