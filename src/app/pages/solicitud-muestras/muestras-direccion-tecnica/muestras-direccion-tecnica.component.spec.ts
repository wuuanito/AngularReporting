import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrasDireccionTecnicaComponent } from './muestras-direccion-tecnica.component';

describe('MuestrasDireccionTecnicaComponent', () => {
  let component: MuestrasDireccionTecnicaComponent;
  let fixture: ComponentFixture<MuestrasDireccionTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestrasDireccionTecnicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestrasDireccionTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
