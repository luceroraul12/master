import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFacturaResumenComponent } from './tabla-factura-resumen.component';

describe('TablaFacturaResumenComponent', () => {
  let component: TablaFacturaResumenComponent;
  let fixture: ComponentFixture<TablaFacturaResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFacturaResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFacturaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
