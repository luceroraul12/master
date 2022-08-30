import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraGeneralComponent } from './botonera-general.component';

describe('BotoneraGeneralComponent', () => {
  let component: BotoneraGeneralComponent;
  let fixture: ComponentFixture<BotoneraGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneraGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneraGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
