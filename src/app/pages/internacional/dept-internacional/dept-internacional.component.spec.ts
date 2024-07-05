import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptInternacionalComponent } from './dept-internacional.component';

describe('DeptInternacionalComponent', () => {
  let component: DeptInternacionalComponent;
  let fixture: ComponentFixture<DeptInternacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptInternacionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
