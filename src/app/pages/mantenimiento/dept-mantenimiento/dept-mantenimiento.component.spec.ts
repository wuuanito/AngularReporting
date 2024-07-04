import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptMantenimientoComponent } from './dept-mantenimiento.component';

describe('DeptMantenimientoComponent', () => {
  let component: DeptMantenimientoComponent;
  let fixture: ComponentFixture<DeptMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptMantenimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
