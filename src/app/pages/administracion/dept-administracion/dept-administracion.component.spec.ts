import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptAdministracionComponent } from './dept-administracion.component';

describe('DeptAdministracionComponent', () => {
  let component: DeptAdministracionComponent;
  let fixture: ComponentFixture<DeptAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptAdministracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
