import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFacturaComponent } from './tabla-factura.component';

describe('TablaFacturaComponent', () => {
  let component: TablaFacturaComponent;
  let fixture: ComponentFixture<TablaFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
