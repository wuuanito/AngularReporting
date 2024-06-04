import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptComprasComponent } from './dept-compras.component';

describe('DeptComprasComponent', () => {
  let component: DeptComprasComponent;
  let fixture: ComponentFixture<DeptComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptComprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
