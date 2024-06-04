import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptRrhhComponent } from './dept-rrhh.component';

describe('DeptRrhhComponent', () => {
  let component: DeptRrhhComponent;
  let fixture: ComponentFixture<DeptRrhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptRrhhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
