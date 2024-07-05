import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptLogisticaComponent } from './dept-logistica.component';

describe('DeptLogisticaComponent', () => {
  let component: DeptLogisticaComponent;
  let fixture: ComponentFixture<DeptLogisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptLogisticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
