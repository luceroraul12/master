import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioResumenComponent } from './formulario-resumen.component';

describe('FormularioResumenComponent', () => {
  let component: FormularioResumenComponent;
  let fixture: ComponentFixture<FormularioResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioResumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
