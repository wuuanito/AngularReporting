import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesMantenimientoComponent } from './solicitudes-mantenimiento.component';

describe('SolicitudesMantenimientoComponent', () => {
  let component: SolicitudesMantenimientoComponent;
  let fixture: ComponentFixture<SolicitudesMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudesMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
