import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptProduccionComponent } from './dept-produccion.component';

describe('DeptProduccionComponent', () => {
  let component: DeptProduccionComponent;
  let fixture: ComponentFixture<DeptProduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptProduccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
