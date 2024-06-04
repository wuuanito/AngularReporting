import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrasLogisticaComponent } from './muestras-logistica.component';

describe('MuestrasLogisticaComponent', () => {
  let component: MuestrasLogisticaComponent;
  let fixture: ComponentFixture<MuestrasLogisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuestrasLogisticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuestrasLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
