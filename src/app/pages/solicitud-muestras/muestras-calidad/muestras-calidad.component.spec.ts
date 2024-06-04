import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrasCalidadComponent } from './muestras-calidad.component';

describe('MuestrasCalidadComponent', () => {
  let component: MuestrasCalidadComponent;
  let fixture: ComponentFixture<MuestrasCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestrasCalidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestrasCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
