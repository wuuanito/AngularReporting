import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesAdministracionComponent } from './solicitudes-administracion.component';

describe('SolicitudesAdministracionComponent', () => {
  let component: SolicitudesAdministracionComponent;
  let fixture: ComponentFixture<SolicitudesAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesAdministracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudesAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
