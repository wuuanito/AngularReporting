import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesInternacionalComponent } from './solicitudes-internacional.component';

describe('SolicitudesInternacionalComponent', () => {
  let component: SolicitudesInternacionalComponent;
  let fixture: ComponentFixture<SolicitudesInternacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesInternacionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudesInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
