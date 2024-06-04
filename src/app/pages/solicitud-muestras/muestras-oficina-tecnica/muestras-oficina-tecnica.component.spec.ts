import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrasOficinaTecnicaComponent } from './muestras-oficina-tecnica.component';

describe('MuestrasOficinaTecnicaComponent', () => {
  let component: MuestrasOficinaTecnicaComponent;
  let fixture: ComponentFixture<MuestrasOficinaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestrasOficinaTecnicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestrasOficinaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
